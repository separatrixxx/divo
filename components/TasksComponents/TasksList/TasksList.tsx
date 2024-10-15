import styles from './TasksList.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { TaskItem } from '../TaskItem/TaskItem';
import { Spinner } from '../../Common/Spinner/Spinner';


export const TasksList = (): JSX.Element => {
    const { tgUser, tasks } = useSetup();

    const groupedTasks = tasks.result.tasks.active.reduce((acc, task) => {
        const day = task.task_day ?? 0;
        if (!acc[day]) {
            acc[day] = [];
        }
        acc[day].push(task);

        return acc;
    }, {} as { [key: string]: typeof tasks.result.tasks.active });

    if (tasks.status !== 'success') {
        return <Spinner />
    }

    return (
        <>
            {
                tasks.result.tasks.active.length > 0 || tasks.result.tasks.completed.length ?
                    <div className={styles.tasksList}>
                        {Object.keys(groupedTasks).map(day => (
                            <>
                                {
                                    groupedTasks[Number(day)].length > 0 ?
                                        <div key={day} className={styles.daysDiv}>
                                            <Htag key={day} tag='s' className={styles.dayText}>
                                                {setLocale(tgUser?.language_code).day + ' ' + day}
                                            </Htag>
                                            {groupedTasks[Number(day)].map(t => (
                                                <TaskItem key={t.id} taskId={t.id} tag={t.tag} award={t.award} task_day={t.task_day}
                                                    task_metadata={t.task_metadata} current={t.progress.current}
                                                    target={t.progress.target} />
                                            ))}
                                        </div>
                                    : <></>
                                }
                            </>
                        ))}
                        {
                            tasks.result.tasks.completed.length > 0 ?
                                <span className={styles.divider} />
                            : <></>
                        }
                        {tasks.result.tasks.completed.map(t => (
                            <TaskItem key={t.id} tag={t.tag} award={t.award} isCompleted={true}
                                current={t.progress.current} target={t.progress.target} />
                        ))}
                    </div>
                :
                    <Htag tag='s' className={styles.noTasks}>
                        {setLocale(tgUser?.language_code).no_tasks}
                    </Htag>
            }
        </>
    );
};
