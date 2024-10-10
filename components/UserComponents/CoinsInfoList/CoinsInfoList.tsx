import styles from './CoinsInfoList.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { CoinsInfoItem } from '../CoinsInfoItem/CoinsInfoItem';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';


export const CoinsInfoList = (): JSX.Element => {
    const { tgUser, coinsInfo } = useSetup();

    return (
        <>
            {
                coinsInfo.result.length > 0 ?
                    <div className={styles.coinsInfoList}>
                        {coinsInfo.result.map((c, i) => (
                            <CoinsInfoItem key={i} event_by={c.event_by} timestamp={c.timestamp}
                                coins_amount={c.coins_amount} />
                        ))}
                    </div>
                :
                    <Htag tag='s' className={styles.noCoinsInfo}>
                        {setLocale(tgUser?.language_code).no_coins_info}
                    </Htag>
        }
        </>
    );
};
