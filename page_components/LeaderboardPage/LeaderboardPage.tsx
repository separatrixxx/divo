import styles from './LeaderboardPage.module.css';
import { useSetup } from '../../hooks/useSetup';
import { MainLink } from '../../components/Common/MainLink/MainLink';
import { Navbar } from '../../components/NavbarComponents/Navbar/Navbar';
import { Spinner } from '../../components/Common/Spinner/Spinner';
import { LeaderboardList } from '../../components/LeaderboardComponents/LeaderboardList/LeaderboardList';
import { Htag } from '../../components/Common/Htag/Htag';
import { setLocale } from '../../helpers/locale.helper';


export const LeaderboardPage = (): JSX.Element => {
    const { router, webApp, tgUser, user, leaderboard } = useSetup();

    if (webApp) {
        webApp?.BackButton.show();

        webApp?.BackButton.onClick(function () {
            router.push('/');
        });
    }

    return (
        <div className={styles.wrapper}>
            {
                !tgUser ?
                    <MainLink />
                : leaderboard.status !== 'success' ?
                    <>
                        <Spinner />
                    </>
                : user.result.user_status === 'user' ?
                    <Htag tag='m' className={styles.accessRestrictedText}>
                        {setLocale(tgUser.language_code).errors.do_not_have_access_to_page_error}
                    </Htag>
                :
                    <>
                        <Htag tag='xl' className={styles.leaderboardTitle}>
                            {setLocale(tgUser.language_code).leaderboard}
                        </Htag>
                        <LeaderboardList />
                        <Navbar />
                    </>
            }
        </div>
    );
};
