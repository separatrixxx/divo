import styles from './UpdatePage.module.css';
import { useSetup } from '../../hooks/useSetup';
import { MainLink } from '../../components/MainComponents/MainLink/MainLink';
import Image from 'next/image';
import { Htag } from '../../components/Common/Htag/Htag';
import { setLocale } from '../../helpers/locale.helper';
import { StartScreen } from '../../components/MainComponents/StartScreen/StartScreen';


export const UpdatePage = (): JSX.Element => {
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
                    <div className={styles.updateDiv}>
                        <Image className={styles.logo} draggable='false'
                            loader={() => '/logo.svg'}
                            src='/logo.svg'
                            alt='logo image'
                            width={1}
                            height={1}
                            unoptimized={true}
                        />
                        <Htag tag='m' className={styles.updateTitle}>
                            {setLocale(tgUser.language_code).update_text}
                        </Htag>
                    </div>
                : <StartScreen />
            }
        </div>
    );
};
