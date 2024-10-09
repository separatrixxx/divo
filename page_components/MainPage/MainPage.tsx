import styles from './MainPage.module.css';
import { useSetup } from '../../hooks/useSetup';
import { MainLink } from '../../components/Common/MainLink/MainLink';
import { Spinner } from '../../components/Common/Spinner/Spinner';
import { Htag } from '../../components/Common/Htag/Htag';
import { ByBlock } from '../../components/Common/ByBlock/ByBlock';
import { ModelsList } from '../../components/MainComponents/ModelsList/ModelsList';
import { Navbar } from '../../components/NavbarComponents/Navbar/Navbar';
import { SortingBar } from '../../components/MainComponents/SortingBar/SortingBar';


export const MainPage = (): JSX.Element => {
    const { webApp, tgUser, user, models } = useSetup();

    if (webApp) {
        webApp?.BackButton.hide();
    }

    return (
        <div className={styles.wrapper}>
            {
                !tgUser ?
                    <MainLink />
                    : user.status !== 'success' ?
                        <>
                            <Spinner />
                            <Htag tag='s' className={styles.versionText}>
                                {process.env.NEXT_PUBLIC_VERSION}
                            </Htag>
                            <ByBlock color='dark' />
                        </>
                        :
                        <>
                            <SortingBar />
                            <ModelsList />
                            <Navbar />
                        </>
            }
        </div>
    );
};
