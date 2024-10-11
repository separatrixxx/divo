import styles from './MainPage.module.css';
import { useSetup } from '../../hooks/useSetup';
import { MainLink } from '../../components/Common/MainLink/MainLink';
import { Spinner } from '../../components/Common/Spinner/Spinner';
import { Htag } from '../../components/Common/Htag/Htag';
import { ByBlock } from '../../components/Common/ByBlock/ByBlock';
import { ModelsList } from '../../components/MainComponents/ModelsList/ModelsList';
import { Navbar } from '../../components/NavbarComponents/Navbar/Navbar';
import { setLocale } from '../../helpers/locale.helper';
import { ModelStat } from '../../components/ModelComponents/ModelStat/ModelStat';


export const MainPage = (): JSX.Element => {
    const { webApp, tgUser, user } = useSetup();

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
                        <Htag tag='xl' className={styles.balance}>
                            {user.result.coins.toLocaleString('en-US') + ' ' + setLocale(tgUser.language_code).token}
                        </Htag>
                        <ModelStat type='burn' stat={user.result.remaining_votes + '/' + user.result.total_available_votes}
                            tooltip={setLocale(tgUser?.language_code).tooltips.remaining_votes} />
                        <ModelsList type='all' />
                        <Navbar />
                    </>
            }
        </div>
    );
};
