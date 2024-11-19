import { CoinsRainProps } from './CoinsRain.props';
import styles from './CoinsRain.module.css';
import { useEffect, useState } from 'react';
import CoinIcon from './logo.svg';
import cn from 'classnames';


export const CoinsRain = ({ amount }: CoinsRainProps): JSX.Element => {
    const [isVisible, setIsVisible] = useState<boolean>(true);

    useEffect(() => {
        const hideTimeout = setTimeout(() => setIsVisible(false), 2200);
        return () => clearTimeout(hideTimeout);
    }, []);

    const coins = Array.from({ length: amount }, (_, index) => ({
        id: index,
        size: Math.random() * 20 + 20,
        animationDelay: Math.random() * 2,
        animationDuration: Math.random() * 1.5 + 1,
        horizontalPosition: Math.random() * 100,
    }));

    return (
        <div className={cn(styles.coinRain, {
            [styles.fadeOut]: !isVisible,
        })}>
            {coins.map((coin) => (
                <CoinIcon key={coin.id} className={styles.coin}
                    style={{
                        width: `${coin.size}px`,
                        left: `${coin.horizontalPosition}%`,
                        animationDelay: `${coin.animationDelay}s`,
                        animationDuration: `${coin.animationDuration}s`,
                    }}
                />
            ))}
        </div>
    );
};
