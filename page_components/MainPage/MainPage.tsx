import styles from './MainPage.module.css';
import { useSetup } from '../../hooks/useSetup';
import { MainLink } from '../../components/Common/MainLink/MainLink';
import { Spinner } from '../../components/Common/Spinner/Spinner';
import { Htag } from '../../components/Common/Htag/Htag';
import { ByBlock } from '../../components/Common/ByBlock/ByBlock';
import { ModelsList } from '../../components/MainComponents/ModelsList/ModelsList';
import { Navbar } from '../../components/NavbarComponents/Navbar/Navbar';
import { SortingBar } from '../../components/MainComponents/SortingBar/SortingBar';
import { useEffect, useState } from 'react';


export const MainPage = (): JSX.Element => {
    const { webApp, tgUser } = useSetup();

    const [isLoading, setIsLoading] = useState<boolean>(true);

    if (webApp) {
        webApp?.BackButton.hide();
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, [webApp]);


    return (
        <div className={styles.wrapper}>
            {
                !tgUser ?
                    <MainLink />
                    : isLoading ?
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
