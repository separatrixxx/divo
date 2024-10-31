import styles from './FriendsPage.module.css';
import { useSetup } from '../../hooks/useSetup';
import { MainLink } from '../../components/MainComponents/MainLink/MainLink';
import { Navbar } from '../../components/NavbarComponents/Navbar/Navbar';
import { FriendsInfo } from '../../components/FriendsComponents/FriendsInfo/FriendsInfo';
import { setLocale } from '../../helpers/locale.helper';
import { Htag } from '../../components/Common/Htag/Htag';
import { StartScreen } from '../../components/MainComponents/StartScreen/StartScreen';


export const FriendsPage = (): JSX.Element => {
    const { router, webApp, tgUser, firstVisit } = useSetup();

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
                : firstVisit ?
                    <>
                        <Htag tag='xl' className={styles.friedsTitle}>
                            {setLocale(tgUser.language_code).friends}
                        </Htag>
                        <Htag tag='m' className={styles.friedsDescription}>
                            {setLocale(tgUser.language_code).friends_description}
                        </Htag>
                        <FriendsInfo />
                        <Navbar />
                    </>
                : <StartScreen />
            }
        </div>
    );
};
