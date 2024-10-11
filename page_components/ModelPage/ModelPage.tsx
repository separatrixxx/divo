import { ModelPageProps } from './ModelPage.props';
import styles from './ModelPage.module.css';
import { useSetup } from '../../hooks/useSetup';
import { MainLink } from '../../components/Common/MainLink/MainLink';
import { Spinner } from '../../components/Common/Spinner/Spinner';
import { ModelInfo } from '../../components/ModelComponents/ModelInfo/ModelInfo';
import { Navbar } from '../../components/NavbarComponents/Navbar/Navbar';


export const ModelPage = ({ model }: ModelPageProps): JSX.Element => {
    const { router, webApp, tgUser } = useSetup();

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
                :
                    <>
                        <ModelInfo status={model.status} modelInfo={model.result} />
                        <Navbar />
                    </>
            }
        </div>
    );
};
