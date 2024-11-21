import styles from './EventTasksList.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { TaskItem } from '../TaskItem/TaskItem';
import { Spinner } from '../../Common/Spinner/Spinner';


export const EventTasksList = (): JSX.Element => {
    const { tgUser, tasks } = useSetup();

    if (tasks.status !== 'success') {
        return <Spinner />;
    }
    
    return (
        <>
            <Htag tag='xl' className={styles.tasksTitle}>
                {setLocale(tgUser?.language_code).event_tasks}
            </Htag>
            <Htag tag='s' className={styles.tasksDescription}>
                {setLocale(tgUser?.language_code).tasks_description}
            </Htag>
            {
                (tasks.result.tasks.event_task && tasks.result.tasks.event_task.length > 0) ?
                    <div className={styles.tasksList}>
                        <>
                            {
                                tasks.result.tasks.event_task.map(t => (
                                    <TaskItem key={t.id} taskId={t.id} name={t.name}
                                        description={t.description} task_metadata={t.task_metadata}
                                        current={t.progress.current}
                                        target={t.progress.target}
                                        isCompleted={false} />
                                ))}
                        </>
                    </div>
                :
                    <Htag tag='s' className={styles.noTasks}>
                        {setLocale(tgUser?.language_code).no_tasks}
                    </Htag>
            }
        </>
    );
};
