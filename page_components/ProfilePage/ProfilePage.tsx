import styles from './ProfilePage.module.css';
import { useSetup } from '../../hooks/useSetup';
import { MainLink } from '../../components/Common/MainLink/MainLink';
import { Navbar } from '../../components/NavbarComponents/Navbar/Navbar';
import { Spinner } from '../../components/Common/Spinner/Spinner';
import { UserInfo } from '../../components/UserComponents/UserInfo/UserInfo';


export const ProfilePage = (): JSX.Element => {
    const { router, webApp, tgUser, user } = useSetup();

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
                        <UserInfo />
                        <Navbar />
                    </>
            }
        </div>
    );
};
