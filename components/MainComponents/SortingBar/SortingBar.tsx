import styles from './SortingBar.module.css';
import { useSetup } from '../../../hooks/useSetup';
import SortIcon from './sort.svg';
import LeaderboardIcon from './leaderboard.svg';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { motion } from 'framer-motion';
import { toggleSort } from '../../../features/sort/sortSlice';
import Link from 'next/link';


export const SortingBar = (): JSX.Element => {
    const { router, dispatch, tgUser, sort } = useSetup();

    const variants = {
        random: {
            rotateX: 0,
        },
        popularity: {
            rotateX: 180,
        }
    };

    return (
        <div className={styles.sortingBar}>
            <div className={styles.sortDiv} onClick={() => dispatch(toggleSort())}>
                <motion.span className={styles.sortIcon}
                    variants={variants}
                    initial={sort === 'random' ? 'random' : 'popularity'}
                    transition={{ duration: 0.3 }}
                    animate={sort === 'random' ? 'random' : 'popularity'}>
                    <SortIcon />
                </motion.span>
                <Htag tag='s' className={styles.sortText}>
                    {setLocale(tgUser?.language_code)[sort === 'random' ? 'random' : 'by_popularity']}
                </Htag>
            </div>
            <Link href='leaderboard' aria-label='leaderboard link' className={styles.leaderboardLink}>
                <LeaderboardIcon />
            </Link>
        </div>
    );
};
