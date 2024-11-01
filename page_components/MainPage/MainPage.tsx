import styles from './MainPage.module.css';
import { useSetup } from '../../hooks/useSetup';
import { MainLink } from '../../components/MainComponents/MainLink/MainLink';
import { ModelsList } from '../../components/MainComponents/ModelsList/ModelsList';
import { Navbar } from '../../components/NavbarComponents/Navbar/Navbar';
import { Header } from '../../components/MainComponents/Header/Header';
import { StartScreen } from '../../components/MainComponents/StartScreen/StartScreen';
import { Toaster } from 'react-hot-toast';


export const MainPage = (): JSX.Element => {
    const { webApp, tgUser, firstVisit } = useSetup();

    if (webApp) {
        webApp?.BackButton.hide();
    }

    return (
        <div className={styles.wrapper}>
            {
                !tgUser ?
                    <MainLink />
                : firstVisit ?
                    <>
                        <Toaster
                            position="top-center"
                            reverseOrder={true}
                            toastOptions={{
                                duration: 2000,
                            }}
                        />
                        <Header />
                        <ModelsList type='all' />
                        <Navbar />
                    </>
                : <StartScreen />
            }
        </div>
    );
};
