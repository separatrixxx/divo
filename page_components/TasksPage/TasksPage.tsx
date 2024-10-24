import styles from './TasksPage.module.css';
import { useSetup } from '../../hooks/useSetup';
import { MainLink } from '../../components/Common/MainLink/MainLink';
import { Navbar } from '../../components/NavbarComponents/Navbar/Navbar';
import { Htag } from '../../components/Common/Htag/Htag';
import { setLocale } from '../../helpers/locale.helper';
import { TasksList } from '../../components/TasksComponents/TasksList/TasksList';
import { Toaster } from 'react-hot-toast';


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
                        <Toaster
                            position="top-center"
                            reverseOrder={true}
                            toastOptions={{
                                duration: 2000,
                            }}
                        />
                        <TasksList type='active' list={tasks.result.tasks.active} />
                        {
                            tasks.status === 'success' && tasks.result.tasks.completed.length > 0 ?
                                <span className={styles.divider} />
                            : <></>
                        }
                        <TasksList type='completed' list={tasks.result.tasks.completed} />
                        <Navbar />
                    </>
            }
        </div>
    );
};
