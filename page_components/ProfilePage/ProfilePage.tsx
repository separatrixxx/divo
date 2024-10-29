import styles from './ProfilePage.module.css';
import { useSetup } from '../../hooks/useSetup';
import { MainLink } from '../../components/Common/MainLink/MainLink';
import { Navbar } from '../../components/NavbarComponents/Navbar/Navbar';
import { UserInfo } from '../../components/UserComponents/UserInfo/UserInfo';
import { Toaster } from 'react-hot-toast';


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
                        <Toaster
                            position="top-center"
                            reverseOrder={true}
                            toastOptions={{
                                duration: 2000,
                            }}
                        />
                        <UserInfo />
                        <Navbar />
                    </>
            }
        </div>
    );
};
