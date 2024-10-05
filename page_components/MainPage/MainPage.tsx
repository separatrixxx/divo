import styles from './MainPage.module.css';
import { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router';
import { useSetup } from '../../hooks/useSetup';
import { MainLink } from '../../components/Common/MainLink/MainLink';
import { Spinner } from '../../components/Common/Spinner/Spinner';
import { Htag } from '../../components/Common/Htag/Htag';
import { ByBlock } from '../../components/Common/ByBlock/ByBlock';


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
                        <Spinner />
                        <Htag tag='s' className={styles.versionText}>
                            {process.env.NEXT_PUBLIC_VERSION}
                        </Htag>
                        <ByBlock color='dark' />
                    </>
            }
        </div>
    );
};
