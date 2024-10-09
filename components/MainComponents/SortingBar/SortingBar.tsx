import styles from './SortingBar.module.css';
import { useSetup } from '../../../hooks/useSetup';
import FilterIcon from './filter.svg';
import LeaderboardIcon from './leaderboard.svg';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { toggleSort } from '../../../features/sort/sortSlice';
import Link from 'next/link';


export const SortingBar = (): JSX.Element => {
    const { dispatch, tgUser, sort } = useSetup();

    return (
        <div className={styles.sortingBar}>
            <div className={styles.sortDiv} onClick={() => dispatch(toggleSort())}>
                <span className={styles.sortIcon}>
                    <FilterIcon />
                </span>
                <Htag tag='s' className={styles.sortText}>
                    {setLocale(tgUser?.language_code)[sort === 'all' ? 'all_models'
                        : (sort === 'voted' ? 'voted_models' : 'not_voted_models')]}
                </Htag>
            </div>
            <Link href='leaderboard' aria-label='leaderboard link' className={styles.leaderboardLink}>
                <LeaderboardIcon />
            </Link>
        </div>
    );
};
