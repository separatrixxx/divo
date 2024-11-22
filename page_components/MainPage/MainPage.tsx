import styles from './MainPage.module.css';
import { useSetup } from '../../hooks/useSetup';
import { MainLink } from '../../components/MainComponents/MainLink/MainLink';
import { ModelsList } from '../../components/MainComponents/ModelsList/ModelsList';
import { Navbar } from '../../components/NavbarComponents/Navbar/Navbar';
import { Header } from '../../components/MainComponents/Header/Header';
import { StartScreen } from '../../components/MainComponents/StartScreen/StartScreen';
import { Toaster } from 'react-hot-toast';
import { useState } from 'react';
import { Modal } from '../../components/Common/Modal/Modal';
import { StartPopup } from '../../components/MainComponents/StartPopup/StartPopup';


export const MainPage = (): JSX.Element => {
    const { webApp, tgUser, firstVisit, user, clicker } = useSetup();

    if (webApp) {
        webApp?.BackButton.hide();
    }

    const startDateUTC = new Date(user.result.last_signed);
    const startDateLocal = new Date(startDateUTC.getTime() - startDateUTC.getTimezoneOffset() * 60000);
    const currentDate = new Date();
    
    const timeDifference = currentDate.getTime() - startDateLocal.getTime();
    const minutesPassed = Math.floor(timeDifference / (1000 * 60));

    const [isActive, setIsActive] = useState<boolean>(true);

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
                        <Modal isActive={isActive && clicker.clicker2 > -1} setIsActive={setIsActive}>
                            <StartPopup minutesPassed={minutesPassed} setIsActive={setIsActive} />
                        </Modal>
                    </>
                : <StartScreen />
            }
        </div>
    );
};
