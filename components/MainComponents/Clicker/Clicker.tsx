import styles from './Clicker.module.css';
import CoinIcon from './logo.svg';
import { useState, useRef } from 'react';
import { useSetup } from '../../../hooks/useSetup';
import { increaseClicker } from '../../../features/clicker/clickerSlice';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import cn from 'classnames';

export const Clicker = (): JSX.Element => {
    const { dispatch, tgUser } = useSetup();

    const [isClicked, setIsClicked] = useState<boolean>(false);
    const [count, setCount] = useState<number>(0);
    const [coins, setCoins] = useState<{ id: number; x: number; y: number }[]>([]);
    const [nextCoinId, setNextCoinId] = useState<number>(0);

    const lastClickTime = useRef<number | null>(null);
    const clickBuffer = useRef<number>(0);

    const handleEvent = (x: number, y: number) => {
        setIsClicked(true);
        const newCount = count + 1;
        setCount(newCount);
        dispatch(increaseClicker());

        const currentTime = Date.now();
        const isFastClick = lastClickTime.current && currentTime - lastClickTime.current < 150;

        if (isFastClick) {
            clickBuffer.current += 1;
        } else {
            clickBuffer.current = 0;
        }

        if (!isFastClick || clickBuffer.current % 5 === 0) {
            const newCoin = { id: nextCoinId, x, y };
            setCoins((prevCoins) => [...prevCoins, newCoin]);
            setNextCoinId(nextCoinId + 1);

            setTimeout(() => {
                setCoins((prevCoins) => prevCoins.filter((coin) => coin.id !== newCoin.id));
            }, 1500);
        }

        lastClickTime.current = currentTime;

        setTimeout(() => {
            setIsClicked(false);
        }, 100);
    };

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        handleEvent(x, y);
    };

    const handleTouch = (e: React.TouchEvent<HTMLDivElement>) => {
        e.stopPropagation();
        const rect = e.currentTarget.getBoundingClientRect();
        const touch = e.touches[0];
        const x = touch.clientX - rect.left;
        const y = touch.clientY - rect.top;
        handleEvent(x, y);
    };

    return (
        <div className={styles.clicker}>
            <div className={styles.clickerTextDiv}>
                <Htag tag='l' className={styles.clickerText}>
                    {setLocale(tgUser?.language_code).tap_coins_while_loading}
                </Htag>
                {
                    count > 0 &&
                        <Htag tag='xxxl' className={styles.countText}>
                            {count}
                        </Htag>
                }
            </div>
            <CoinIcon 
                className={cn(styles.clickerButton, {
                    [styles.isClicked]: isClicked,
                })} 
                onClick={handleClick} 
                onTouchStart={handleTouch} 
            />
            {coins.map((coin) => (
                <CoinIcon key={coin.id} className={styles.flyingCoin}
                    style={{
                        left: `${coin.x}px`,
                        top: `${coin.y}px`,
                    }}
                />
            ))}
        </div>
    );
};
