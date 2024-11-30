import styles from './Header.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { numFormat } from '../../../helpers/format.helper';
import BurnIcon from './burn.svg';
import { useEffect, useState } from 'react';
import { Coin } from '../../Common/Coin/Coin';
import cn from 'classnames';


export const Header = (): JSX.Element => {
    const { router, tgUser, user } = useSetup();

    const [showCoin, setShowCoin] = useState<boolean>(false);
    const animationInterval  = 10;

    useEffect(() => {
        const interval = setInterval(() => {
            setShowCoin(true);
            setTimeout(() => setShowCoin(false), 5000);
        }, animationInterval * 1000);

        return () => clearInterval(interval);
    }, [animationInterval]);

    return (
        <header className={styles.header}>
            <div className={styles.headerDiv}>
                <Htag tag='xs' className={styles.title}>
                    {setLocale(tgUser?.language_code).balance}
                </Htag>
                <Htag tag='m' className={styles.text}>
                    {numFormat(user.result.coins) + ' ' + setLocale(tgUser?.language_code).token}
                </Htag>
                {
                    showCoin && user.result.daily_stake_income > 0 &&
                        <Coin isSmall={true} />
                }
            </div>
            <Htag tag='m' className={cn(styles.text, styles.burnText)}>
                {numFormat(user.result.remaining_votes) + '/' + numFormat(user.result.total_available_votes)}
                <BurnIcon />
            </Htag>
            <div className={cn(styles.headerDiv, styles.rightHeaderDiv)} onClick={() => router.push('/profile?type=divosit')}>
                <Htag tag='xs' className={styles.title}>
                    {setLocale(tgUser?.language_code).per_day}
                </Htag>
                <Htag tag='m' className={styles.text}>
                    {numFormat(user.result.daily_stake_income) + ' ' + setLocale(tgUser?.language_code).token}
                </Htag>
            </div>
        </header>
    );
};
