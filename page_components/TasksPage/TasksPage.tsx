import styles from './TasksPage.module.css';
import { useSetup } from '../../hooks/useSetup';
import { MainLink } from '../../components/Common/MainLink/MainLink';
import { Navbar } from '../../components/NavbarComponents/Navbar/Navbar';
import { Htag } from '../../components/Common/Htag/Htag';
import { setLocale } from '../../helpers/locale.helper';
import { Spinner } from '../../components/Common/Spinner/Spinner';
import { TasksList } from '../../components/TasksComponents/TasksList/TasksList';


export const TasksPage = (): JSX.Element => {
    const { router, webApp, tgUser, tasks } = useSetup();

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
                        <Htag tag='xl' className={styles.tasksTitle}>
                            {setLocale(tgUser.language_code).tasks}
                        </Htag>
                        <TasksList />
                        <Navbar />
                    </>
            }
        </div>
    );
};
