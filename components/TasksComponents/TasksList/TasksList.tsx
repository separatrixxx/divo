import { TaskListProps } from './TasksList.props';
import styles from './TasksList.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { TaskItem } from '../TaskItem/TaskItem';
import { Spinner } from '../../Common/Spinner/Spinner';
import { TaskItemInterface } from '../../../interfaces/tasks.interface';
import { useEffect, useMemo, useState } from 'react';
import { getTasks } from '../../../helpers/tasks.helper';
import cn from 'classnames';


export const TasksList = ({ type, list }: TaskListProps): JSX.Element => {
    const { router, dispatch, webApp, tgUser, user, tasks } = useSetup();

    const startDateUTC = useMemo(() => new Date(user.result.register_date), [user.result.register_date]);
    const startDateLocal = useMemo(() => new Date(startDateUTC.getTime() + startDateUTC.getTimezoneOffset() * 60000), [startDateUTC]);
    const currentDate = new Date();

    const timeDifference = currentDate.getTime() - startDateLocal.getTime();
    const currentDay = Math.floor(timeDifference / (1000 * 3600 * 24)) + 1;

    const [timeUntilNextTasks, setTimeUntilNextTasks] = useState<number | null>(null);

    const groupedTasks = list.reduce((acc, task) => {
        const day = task.task_day ?? 0;

        if (!acc[day]) {
            acc[day] = [];
        }

        acc[day].push(task);

        return acc;
    }, {} as { [key: string]: TaskItemInterface[] });

    useEffect(() => {
        const hasPreviousOrCurrentTasks = Object.keys(groupedTasks)
            .some(day => Number(day) <= currentDay);

         if (type === 'active' && groupedTasks[currentDay + 1] !== undefined  && !hasPreviousOrCurrentTasks) {
            const calculateTimeUntilNextTasks = () => {
                const now = new Date();
                const nextDay = new Date(startDateLocal);
                nextDay.setDate(startDateLocal.getDate() + currentDay + 1);

                return nextDay.getTime() - now.getTime();
            };
    
            setTimeUntilNextTasks(calculateTimeUntilNextTasks());
            
            let hasFetchedTasks = false;
    
            const timer = setInterval(() => {
                const timeLeft = calculateTimeUntilNextTasks();
                setTimeUntilNextTasks(timeLeft);
    
                if (timeLeft <= 0 && !hasFetchedTasks) {
                    clearInterval(timer);
                    hasFetchedTasks = true;
    
                    getTasks({
                        router: router,
                        webApp: webApp,
                        dispatch: dispatch,
                        tgUser: tgUser,
                    });
                }
            }, 1000);
    
            return () => clearInterval(timer);
        }
    }, [router, webApp, dispatch, tgUser, type, groupedTasks, startDateLocal, currentDay]);

    if (tasks.status !== 'success') {
        return <Spinner />;
    }

    return (
        <>
            <Htag tag='xl' className={styles.tasksTitle}>
                {setLocale(tgUser?.language_code)[type + '_tasks' as 'active_tasks']}
            </Htag>
            {
               (type === 'active' && Object.keys(groupedTasks).some(day => Number(day) <= currentDay))
                    || (type === 'completed' && Object.keys(groupedTasks).length > 0) ?
                    <div className={cn(styles.tasksList, {
                        [styles.activeTasksList]: type === 'active',
                    })}>
                        <>
                            {Object.keys(groupedTasks)
                                .filter(day => (type === 'active' ? Number(day) <= currentDay : true))
                                .reverse().map((day, i) => (
                                    <div key={day + i} className={styles.daysDiv}>
                                        <Htag key={day} tag='s' className={styles.dayText}>
                                            {setLocale(tgUser?.language_code).day + ' ' + day}
                                        </Htag>
                                        {groupedTasks[Number(day)]
                                            .sort((a, b) => (a.tag === 'referral' ? 1 : b.tag === 'referral' ? -1 : 0))
                                            .map(t => (
                                            <TaskItem key={t.id} taskId={t.id}
                                                name={t.name} task_metadata={t.task_metadata}
                                                current={type === 'active' ? t.progress.current : undefined}
                                                target={type === 'active' ? t.progress.target : undefined}
                                                isCompleted={type !== 'active'} />
                                        ))}
                                    </div>
                                ))}
                        </>
                    </div>
                : type === 'active' && groupedTasks[currentDay + 1] !== undefined ?
                    <Htag tag='s' className={styles.noTasks}>
                        {setLocale(tgUser?.language_code).time_until_tasks + ': ' + new Date(timeUntilNextTasks ?? 0).toISOString().substr(11, 8)}
                    </Htag>
                :
                    <Htag tag='s' className={cn(styles.noTasks, {
                        [styles.completedNoTasks]: type === 'completed',
                    })}>
                        {setLocale(tgUser?.language_code).no_tasks}
                    </Htag>
            }
        </>
    );    
};
