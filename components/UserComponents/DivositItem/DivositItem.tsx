import { DivositItemProps } from './DivositItem.props';
import styles from './DivositItem.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { formatTimestamp } from '../../../helpers/format.helper';


export const DivositItem = ({ amount, dateEnd, dailyReward, totalReward }: DivositItemProps): JSX.Element => {
    const { tgUser } = useSetup();

    return (
        <div className={styles.divositItem}>
            <Htag tag='s' className={styles.title}>
                {`${amount.toLocaleString('en-US')} ${setLocale(tgUser?.language_code).token}  ${setLocale(tgUser?.language_code).until} ${formatTimestamp(dateEnd || 0)}`}
            </Htag>
            <Htag tag='xs' className={styles.text}>
                {setLocale(tgUser?.language_code).per_day_total
                    .replace('$$$', dailyReward.toLocaleString('en-US') + ' ' + setLocale(tgUser?.language_code).token)
                    .replace('$$$$', totalReward.toLocaleString('en-US') + ' ' + setLocale(tgUser?.language_code).token)
                }
            </Htag>
        </div>
    );
};
