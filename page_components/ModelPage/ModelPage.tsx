import { ModelPageProps } from './ModelPage.props';
import styles from './ModelPage.module.css';
import { useSetup } from '../../hooks/useSetup';
import { MainLink } from '../../components/MainComponents/MainLink/MainLink';
import { ModelInfo } from '../../components/ModelComponents/ModelInfo/ModelInfo';
import { Navbar } from '../../components/NavbarComponents/Navbar/Navbar';
import { StartScreen } from '../../components/MainComponents/StartScreen/StartScreen';


export const ModelPage = ({ model }: ModelPageProps): JSX.Element => {
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
                        <ModelInfo status={model.status} modelInfo={model.result} />
                        <Navbar />
                    </>
                : <StartScreen />
            }
        </div>
    );
};
