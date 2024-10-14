import styles from './LeaderboardItem.module.css';
import Link from 'next/link';
import { LeaderboardItemInterface } from '../../../interfaces/leaderboard.interface';
import { Htag } from '../../Common/Htag/Htag';
import BurnIcon from './burn.svg';
import { useSetup } from '../../../hooks/useSetup';
import cn from 'classnames';


export const LeaderboardItem = ({ position, model_id, total_votes, voted_by_user }: LeaderboardItemInterface): JSX.Element => {
    const { webApp, tgUser } = useSetup();

    return (
        <Link href={`/model/${tgUser?.id}/0/${model_id}`} className={cn(styles.leaderboardItem, {
            [styles.weba]: webApp?.platform === 'weba',
        })} aria-label='model link'>
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
