import { CoinsInfoItemProps } from './CoinsInfoItem.props';
import styles from './CoinsInfoItem.module.css';
import { Htag } from '../../Common/Htag/Htag';
import { format } from 'date-fns';
import { setLocale } from '../../../helpers/locale.helper';
import { useSetup } from '../../../hooks/useSetup';


export const CoinsInfoItem = ({ event_by, timestamp, coins_amount }: CoinsInfoItemProps): JSX.Element => {
    const { tgUser } = useSetup();

    return (
        <div className={styles.coinsInfoItem}>
            <div className={styles.coinsInfoDiv}>
                <Htag tag='m' className={styles.coinsAmount}>
                    {'+' + coins_amount + ' ' + setLocale(tgUser?.language_code).token}
                </Htag>
                <Htag tag='xs' className={styles.date}>
                    {format(timestamp, 'dd.MM.yyyy, HH:mm')}
                </Htag>
            </div>
            <Htag tag='s' className={styles.event}>
                {setLocale(tgUser?.language_code).events[event_by as 'voting']}
            </Htag>
        </div>
    );
};
