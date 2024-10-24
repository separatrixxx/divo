import styles from './MainPage.module.css';
import { useSetup } from '../../hooks/useSetup';
import { MainLink } from '../../components/Common/MainLink/MainLink';
import { ModelsList } from '../../components/MainComponents/ModelsList/ModelsList';
import { Navbar } from '../../components/NavbarComponents/Navbar/Navbar';
import { Header } from '../../components/MainComponents/Header/Header';


export const MainPage = (): JSX.Element => {
    const { webApp, tgUser } = useSetup();

    if (webApp) {
        webApp?.BackButton.hide();
    }

    return (
        <div className={styles.wrapper}>
            {
                !tgUser ?
                    <MainLink />
                :
                    <>
                        <Header />
                        <ModelsList type='all' />
                        <Navbar />
                    </>
            }
        </div>
    );
};
