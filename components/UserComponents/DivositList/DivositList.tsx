import { DivositListProps } from './DivositList.props';
import styles from './DivositList.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { CoinsInfoItem } from '../CoinsInfoItem/CoinsInfoItem';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { DivositItem } from '../DivositItem/DivositItem';


export const DivositList = ({ type, list }: DivositListProps): JSX.Element => {
    const { tgUser } = useSetup();

    return (
        <>
            {
                list && list.length > 0 ?
                    <div className={styles.divositList}>
                        {list.map(l => (
                            <DivositItem key={l.stake_id} amount={l.amount}
                                dateEnd={type === 'active' ? l.end_date : l.completed_date}
                                dailyReward={l.daily_reward} totalReward={l.total_reward} />
                        ))}
                    </div>
                :
                    <Htag tag='s' className={styles.noDivosits}>
                        {setLocale(tgUser?.language_code)[type === 'active' ? 'no_active_divosits' : 'no_completed_divosits']}
                    </Htag>
        }
        </>
    );
};
