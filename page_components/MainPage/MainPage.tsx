import styles from './MainPage.module.css';
import { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router';
import { useSetup } from '../../hooks/useSetup';
import { MainLink } from '../../components/Common/MainLink/MainLink';
import { Spinner } from '../../components/Common/Spinner/Spinner';
import { Htag } from '../../components/Common/Htag/Htag';
import { ByBlock } from '../../components/Common/ByBlock/ByBlock';
import { ModelsList } from '../../components/MainComponents/ModelsList/ModelsList';


export const MainPage = (): JSX.Element => {
    const { tgUser, models } = useSetup();

    return (
        <div className={styles.wrapper}>
            {
                !tgUser ?
                    <MainLink />
                : models.status !== 'success' ?
                    <>
                        <Spinner />
                        <Htag tag='s' className={styles.versionText}>
                            {process.env.NEXT_PUBLIC_VERSION}
                        </Htag>
                        <ByBlock color='dark' />
                    </>
                : 
                    <>
                        <ModelsList />
                    </>
            }
        </div>
    );
};
