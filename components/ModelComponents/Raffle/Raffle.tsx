import { RaffleProps } from './Raffle.props';
import styles from './Raffle.module.css';
import { useState, useEffect } from 'react';
import cn from 'classnames';


export const Raffle = ({ target, default_award, isVisible, setIsVisible }: RaffleProps): JSX.Element => {
    const numbers: number[] = Array.from([800, 1600, 8000], x => x * default_award);

    const [highlightedIndex, setHighlightedIndex] = useState<number>(0);
    const [isAnimating, setIsAnimating] = useState<boolean>(false);
    const [isBlinking, setIsBlinking] = useState<boolean>(false);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        let additionalIterationTimeout: NodeJS.Timeout;
        let blinkTimeout: NodeJS.Timeout;
        let hideTimeout: NodeJS.Timeout;

        if (isVisible && target) {
            setIsAnimating(true);

            interval = setInterval(() => {
                setHighlightedIndex((prevIndex) => (prevIndex + 1) % numbers.length);
            }, 100);

            setTimeout(() => {
                clearInterval(interval);

                additionalIterationTimeout = setTimeout(() => {
                    const targetIndex = numbers.indexOf(target);
                    setHighlightedIndex(targetIndex);
                    setIsAnimating(false);

                    setIsBlinking(true);

                    blinkTimeout = setTimeout(() => {
                        setIsBlinking(false);

                        hideTimeout = setTimeout(() => {
                            setIsVisible(false);
                        }, 500);
                    }, 2000);
                }, 100);
            }, 2000);
        }

        return () => {
            clearInterval(interval);
            clearTimeout(additionalIterationTimeout);
            clearTimeout(blinkTimeout);
            clearTimeout(hideTimeout);
        };
    }, [target, numbers, isVisible, setIsVisible]);

    if (!isVisible) {
        return <></>;
    }

    return (
        <div className={styles.raffle}>
            {numbers.map((number, index) => (
                <div
                    key={index}
                    className={cn(styles.cell, {
                        [styles.highlighted]: highlightedIndex === index,
                        [styles.target]: !isAnimating && number === target,
                        [styles.blink]: isBlinking && number === target,
                    })}
                >
                    {number}
                </div>
            ))}
        </div>
    );
};
