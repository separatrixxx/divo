import { RaffleProps } from './Raffle.props';
import styles from './Raffle.module.css';
import { useState, useEffect } from 'react';
import cn from 'classnames';
import { FireworksComponents } from '../Fireworks/Fireworks';


export const Raffle = ({ target, potentionalReward, isVisible, setIsVisible }: RaffleProps): JSX.Element => {
    const [highlightedIndex, setHighlightedIndex] = useState<number>(0);
    const [isAnimating, setIsAnimating] = useState<boolean>(false);
    const [isBlinking, setIsBlinking] = useState<boolean>(false);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        let additionalIterationTimeout: NodeJS.Timeout;
        let blinkTimeout: NodeJS.Timeout;
        let hideTimeout: NodeJS.Timeout;

        if (isVisible && target && potentionalReward) {
            setIsAnimating(true);

            interval = setInterval(() => {
                setHighlightedIndex((prevIndex) => (prevIndex + 1) % potentionalReward.length);
            }, 150);

            setTimeout(() => {
                clearInterval(interval);

                additionalIterationTimeout = setTimeout(() => {
                    const targetIndex = potentionalReward.indexOf(target);
                    setHighlightedIndex(targetIndex);
                    setIsAnimating(false);

                    setIsBlinking(true);

                    blinkTimeout = setTimeout(() => {
                        setIsBlinking(false);

                        hideTimeout = setTimeout(() => {
                            setIsVisible(false);
                        }, 500);
                    }, 3000);
                }, 100);
            }, 2000);
        }

        return () => {
            clearInterval(interval);
            clearTimeout(additionalIterationTimeout);
            clearTimeout(blinkTimeout);
            clearTimeout(hideTimeout);
        };
    }, [target, potentionalReward, isVisible, setIsVisible]);

    if (!isVisible) {
        return <></>;
    }

    return (
        <>
            <FireworksComponents />
            <div className={styles.raffle}>
                {potentionalReward?.map((number, index) => (
                    <div key={index} className={cn(styles.cell, {
                        [styles.highlighted]: highlightedIndex === index,
                        [styles.target]: !isAnimating && number === target,
                        [styles.blink]: isBlinking && number === target,
                    })}>
                        {number}
                    </div>
                ))}
            </div>
        </>
    );
};
