import styles from './LeaderboardItem.module.css';
import Link from 'next/link';
import { LeaderboardItemInterface } from '../../../interfaces/leaderboard.interface';
import { Htag } from '../../Common/Htag/Htag';
import BurnIcon from './burn.svg';
import cn from 'classnames';


export const LeaderboardItem = ({ position, model_id, total_votes, voted_by_user }: LeaderboardItemInterface): JSX.Element => {
    return (
        <Link href={'/model/' + model_id} aria-label='model link' className={styles.leaderboardItem}>
            <Htag tag='l' className={styles.position}>
                {position}
            </Htag>
            <div className={styles.leaderboardInfoDiv}>
                <Htag tag='s'>
                    {model_id}
                </Htag>
                <div className={styles.votesStat}>
                    <BurnIcon className={styles.burnIcon} />
                    <Htag tag='xs'>
                        {total_votes}
                    </Htag>
                </div>
            </div>
            <BurnIcon className={cn(styles.isVotedIcon, {
                [styles.isVoted]: voted_by_user,
            })} />
        </Link>
    );
};
