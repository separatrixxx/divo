import styles from './TasksList.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { TaskItem } from '../TaskItem/TaskItem';


export const TasksList = (): JSX.Element => {
    const { tgUser, tasks } = useSetup();

    return (
        <>
            {
                tasks.result.tasks.active.length > 0 || tasks.result.tasks.completed.length ?
                    <div className={styles.tasksList}>
                        {tasks.result.tasks.active.map(t => (
                            <TaskItem key={t.id} id={t.id} name={t.name} tag={t.tag} award={t.award}
                                current={t.progress.current} target={t.progress.target} />
                        ))}
                        {
                            tasks.result.tasks.completed.length > 0 ?
                                <span className={styles.divider} />
                            : <></>
                        }
                        {tasks.result.tasks.completed.map(t => (
                            <TaskItem key={t.id} id={t.id} name={t.name} tag={t.tag} award={t.award} isCompleted={true}
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
