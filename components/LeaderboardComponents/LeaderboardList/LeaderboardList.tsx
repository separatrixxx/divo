import styles from './LeaderboardList.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { LeaderboardItem } from '../LeaderboardItem/LeaderboardItem';


export const LeaderboardList = (): JSX.Element => {
    const { leaderboard } = useSetup();

    return (
        <div className={styles.leaderboardList}>
            {leaderboard.result.top_20.map(l => (
                <LeaderboardItem key={l.model_id} position={l.position} model_id={l.model_id}
                    original_id={l.original_id} total_votes={l.total_votes} voted_by_user={l.voted_by_user} />
            ))}
        </div>
    );
};
