import styles from './SortingBar.module.css';
import { useSetup } from '../../../hooks/useSetup';
import FilterIcon from './filter.svg';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { toggleSort } from '../../../features/sort/sortSlice';
import { numFormat } from '../../../helpers/format.helper';
import { ModelStat } from '../../ModelComponents/ModelStat/ModelStat';


export const SortingBar = (): JSX.Element => {
    const { dispatch, tgUser, user, sort } = useSetup();

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
            {/* <Link href='leaderboard' aria-label='leaderboard link' className={styles.leaderboardLink}>
                <LeaderboardIcon />
            </Link> */}
            <ModelStat type='coin' stat={numFormat(user.result.coins)}
                tooltip={setLocale(tgUser?.language_code).tooltips.your_balance} isActive={true} />
        </div>
    );
};
