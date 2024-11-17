import { CoinsInfoItemProps } from './CoinsInfoItem.props';
import styles from './CoinsInfoItem.module.css';
import { Htag } from '../../Common/Htag/Htag';
import { format } from 'date-fns';
import { setLocale } from '../../../helpers/locale.helper';
import { useSetup } from '../../../hooks/useSetup';
import ArrowIcon from './arrow.svg';


export const CoinsInfoItem = ({ event_by, timestamp, coins_amount }: CoinsInfoItemProps): JSX.Element => {
    const { tgUser } = useSetup();

    return (
        <div className={styles.coinsInfoItem}>
            <ArrowIcon className={styles.arrow} />
            <div className={styles.coinsInfoDiv}>
                <Htag tag='s' className={styles.event}>
                    {setLocale(tgUser?.language_code).events[event_by as 'voting']}
                </Htag>
                <Htag tag='xs' className={styles.date}>
                    {format(timestamp, 'dd.MM.yyyy, HH:mm')}
                </Htag>
            </div>
            <Htag tag='m' className={styles.coinsAmount}>
                {'+' + coins_amount.toLocaleString('ru-RU') + ' ' + setLocale(tgUser?.language_code).token}
            </Htag>
        </div>
    );
};
