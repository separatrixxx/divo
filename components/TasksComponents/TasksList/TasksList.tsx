import { TaskListProps } from './TasksList.props';
import styles from './TasksList.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { TaskItem } from '../TaskItem/TaskItem';
import { Spinner } from '../../Common/Spinner/Spinner';
import { TaskItemInterface } from '../../../interfaces/tasks.interface';
import cn from 'classnames';


export const TasksList = ({ type, list }: TaskListProps): JSX.Element => {
    const { tgUser, user, tasks } = useSetup();

    const startDateUTC = new Date(user.result.register_date);
    const currentDate = new Date();
    
    const localStartDate = new Date(startDateUTC.getFullYear(), startDateUTC.getMonth(), startDateUTC.getDate());
    const localCurrentDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
    
    const timeDifference = localCurrentDate.getTime() - localStartDate.getTime();
    const currentDay = Math.floor(timeDifference / (1000 * 3600 * 24)) + 1;
    
    const groupedTasks = list.reduce((acc, task) => {
        const day = task.task_day ?? 0;

        if (!acc[day]) {
            acc[day] = [];
        }

        acc[day].push(task);

        return acc;
    }, {} as { [key: string]: TaskItemInterface[] });

    if (tasks.status !== 'success') {
        return <Spinner />;
    }

    return (
        <>
            <Htag tag='xl' className={styles.tasksTitle}>
                {setLocale(tgUser?.language_code)[type + '_tasks' as 'active_tasks']}
            </Htag>
            {
                type === 'active' ?
                    <Htag tag='m' className={styles.tasksDescription}>
                        {setLocale(tgUser?.language_code).tasks_description}
                    </Htag>
                : <></>
            }
            {
                (groupedTasks[currentDay]?.length > 0 && type === 'active')
                    || (Object.keys(groupedTasks).length > 0 && type === 'completed') ?
                    <div className={cn(styles.tasksList, {
                        [styles.activeTasksList]: type === 'active',
                    })}>
                        {
                            type === 'active' ?
                                <div className={styles.daysDiv}>
                                    <Htag key={currentDay} tag='s' className={styles.dayText}>
                                        {setLocale(tgUser?.language_code).day + ' ' + currentDay}
                                    </Htag>
                                    {groupedTasks[currentDay]
                                        .sort((a, b) => (a.tag === 'referral' ? 1 : b.tag === 'referral' ? -1 : 0))
                                        .map(t => (
                                            <TaskItem key={t.id} taskId={t.id} tag={t.tag} task_day={t.task_day}
                                                task_metadata={t.task_metadata} current={t.progress.current}
                                                target={t.progress.target} currentDay={currentDay} />
                                        ))}
                                </div>
                            :
                                <>
                                    {Object.keys(groupedTasks).reverse().map(day => (
                                        <div key={day} className={styles.daysDiv}>
                                            <Htag key={day} tag='s' className={styles.dayText}>
                                                {setLocale(tgUser?.language_code).day + ' ' + day}
                                            </Htag>
                                            {groupedTasks[Number(day)].map(t => (
                                                <TaskItem key={t.id} tag={t.tag} isCompleted={true} currentDay={currentDay} />
                                            ))}
                                        </div>
                                    ))}
                                </>
                        }
                    </div>
                :
                    <Htag tag='s' className={styles.noTasks}>
                        {setLocale(tgUser?.language_code).no_tasks}
                    </Htag>
            }
        </>
    );
};
