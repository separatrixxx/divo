import styles from './Raffle.module.css';
import { useState, useEffect } from 'react';
import cn from 'classnames';


export const Raffle = (): JSX.Element => {
    const numbers: number[] = [5000, 25000, 50000];
    const [highlightedIndex, setHighlightedIndex] = useState<number>(0);
    const [isAnimating, setIsAnimating] = useState<boolean>(true);
    const target: number = 5000;

    useEffect(() => {
        let interval: NodeJS.Timeout;
        let additionalIterationTimeout: NodeJS.Timeout;

        if (isAnimating) {
            interval = setInterval(() => {
                setHighlightedIndex((prevIndex) => (prevIndex + 1) % numbers.length);
            }, 100);
        }

        setTimeout(() => {
            clearInterval(interval);

            additionalIterationTimeout = setTimeout(() => {
                const targetIndex = numbers.indexOf(target);
                setHighlightedIndex(targetIndex);
                setIsAnimating(false);
            }, 100);
        }, 2000);

        return () => {
            clearInterval(interval);
            clearTimeout(additionalIterationTimeout);
        };
    }, [isAnimating]);

    return (
        <div className={styles.raffle}>
            {numbers.map((number, index) => (
                <div key={index}
                    className={cn(
                        styles.cell,
                        { [styles.highlighted]: highlightedIndex === index },
                        { [styles.target]: !isAnimating && number === target }
                    )}>
                    {number}
                </div>
            ))}
        </div>
    );
};
