import styles from './FriendsPage.module.css';
import { useSetup } from '../../hooks/useSetup';
import { MainLink } from '../../components/Common/MainLink/MainLink';
import { Navbar } from '../../components/NavbarComponents/Navbar/Navbar';
import { FriendsInfo } from '../../components/FriendsComponents/FriendsInfo/FriendsInfo';
import { setLocale } from '../../helpers/locale.helper';
import { Htag } from '../../components/Common/Htag/Htag';


export const FriendsPage = (): JSX.Element => {
    const { router, webApp, tgUser, refs } = useSetup();

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
                :
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
            }
        </div>
    );
};
