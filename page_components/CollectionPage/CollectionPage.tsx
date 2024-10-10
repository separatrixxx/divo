import styles from './CollectionPage.module.css';
import { useSetup } from '../../hooks/useSetup';
import { MainLink } from '../../components/Common/MainLink/MainLink';
import { Spinner } from '../../components/Common/Spinner/Spinner';
import { ModelsList } from '../../components/MainComponents/ModelsList/ModelsList';
import { Navbar } from '../../components/NavbarComponents/Navbar/Navbar';
import { Htag } from '../../components/Common/Htag/Htag';
import { setLocale } from '../../helpers/locale.helper';


export const CollectionPage = (): JSX.Element => {
    const { router, webApp, tgUser, models } = useSetup();

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
                    : models.status !== 'success' ?
                        <Spinner />
                    :
                        <>
                            <Htag tag='xl' className={styles.collectionTitle}>
                                {setLocale(tgUser.language_code).collection}
                            </Htag>
                            <ModelsList type='collection' />
                            <Navbar />
                        </>
            }
        </div>
    );
};
