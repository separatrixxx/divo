import styles from './InfoPage.module.css';
import { useSetup } from '../../hooks/useSetup';
import { MainLink } from '../../components/MainComponents/MainLink/MainLink';
import { Navbar } from '../../components/NavbarComponents/Navbar/Navbar';
import { setLocale } from '../../helpers/locale.helper';
import { Htag } from '../../components/Common/Htag/Htag';
import { Info } from '../../components/Info/Info';
import { StartScreen } from '../../components/MainComponents/StartScreen/StartScreen';


export const InfoPage = (): JSX.Element => {
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
                        <Htag tag='xl' className={styles.infoTitle}>
                            {setLocale(tgUser.language_code).info}
                        </Htag>
                        <Info />
                        <Navbar />
                    </>
                : <StartScreen />
            }
        </div>
    );
};
