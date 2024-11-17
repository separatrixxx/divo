import styles from './DivositBlock.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { useEffect, useState } from 'react';
import { Button } from '../../Common/Button/Button';
import { addStaking, calculateProfit } from '../../../helpers/divosit.helper';
import { numFormat } from '../../../helpers/format.helper';
import { DivositList } from '../DivositList/DivositList';
import { ToastError } from '../../Common/Toast/Toast';


export const DivositBlock = (): JSX.Element => {
    const { router, dispatch, tgUser, webApp, user, divosit } = useSetup();

    const [coinsDivosit, setCoinsDivosit] = useState<5000 | 10000 | 50000>(5000);
    const [daysDivosit, setDaysDivosit] = useState<1 | 7 | 30>(1);

    const coins: (5000 | 10000 | 50000)[] = [5000, 10000, 50000];
    const days: (1 | 7 | 30)[] = [1, 7, 30];

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [refresh, setRefresh] = useState<boolean>(false);

    const [stakeCoins, setStakeCoins] = useState<number>(user.result.blocked_in_stake);

    return (
        <div className={styles.divositBlock}>
            <Htag tag='m' className={styles.text}>
                {setLocale(tgUser?.language_code).coins_on_divosit + ':'}
            </Htag>
            <Htag tag='xl' className={styles.coinsTitle}>
                {stakeCoins.toLocaleString('ru-RU') + ' ' + setLocale(tgUser?.language_code).token}
            </Htag>
            <Htag tag='m' className={styles.text}>
                {setLocale(tgUser?.language_code).divosit_calculator + ':'}
            </Htag>
            <div className={styles.daysDiv}>
                {coins.map(c => (
                    <Button key={c} text={numFormat(c)}
                        isActive={user.result.coins - user.result.blocked_in_stake >= c && coinsDivosit === c}
                        onClick={() => {
                            if (user.result.coins >= c) {
                                setCoinsDivosit(c)
                            }
                        }} />
                ))}
            </div>
            <div className={styles.daysDiv}>
                {days.map(d => (
                    <Button key={d} text={d + ' ' + setLocale(tgUser?.language_code).day} isActive={daysDivosit === d}
                        onClick={() => setDaysDivosit(d)} />
                ))}
            </div>
            <Htag tag='m' className={styles.text}>
                {setLocale(tgUser?.language_code).divosit_rate + ': ' +
                    (daysDivosit === 1 ? '0.5% ' : daysDivosit === 7 ? '0.7% ' : '1% ') +
                    setLocale(tgUser?.language_code).per_day}
            </Htag>
            <Htag tag='m' className={styles.text}>
                {setLocale(tgUser?.language_code).your_profit + ': ' +
                    (user.result.coins - user.result.blocked_in_stake >= 5000 ? calculateProfit(coinsDivosit, daysDivosit) : 0)}
            </Htag>
            <Button text={setLocale(tgUser?.language_code)[user.result.coins - user.result.blocked_in_stake >= 5000 ? 'put_coins_on_divosit' : 'not_enough_coins']}
                isLoading={isLoading} isDisabled={user.result.coins - user.result.blocked_in_stake < 5000} onClick={() => {
                    if (user.result.coins - user.result.blocked_in_stake >= 5000) {
                        addStaking({
                            router: router,
                            dispatch: dispatch,
                            webApp: webApp,
                            tgUser: tgUser,
                            amount: coinsDivosit,
                            duration: daysDivosit,
                            setStakeCoins: setStakeCoins,
                            setIsLoading: setIsLoading,
                        }).then(() => setRefresh(!refresh));
                    } else {
                        ToastError(setLocale(tgUser?.language_code).not_enough_coins);
                    }
                }}
            />
            <span className={styles.divider} />
            <Htag tag='m' className={styles.text}>
                {setLocale(tgUser?.language_code).active_divosit + ':'}
            </Htag>
            <DivositList type='active' list={divosit.active.result.active_stakes} />
            <span className={styles.divider} />
            <Htag tag='m' className={styles.text}>
                {setLocale(tgUser?.language_code).completed_divosit + ':'}
            </Htag>
            <DivositList type='completed' list={divosit.completed.result.history} />
        </div>
    );
};
