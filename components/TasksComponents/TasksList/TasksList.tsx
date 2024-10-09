import styles from './TasksList.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { TaskItem } from '../TaskItem/TaskItem';
import { Button } from '../../Common/Button/Button';
import { useState } from 'react';


export const TasksList = (): JSX.Element => {
    const { tgUser, tasks } = useSetup();

    const [tasksType, setTasksType] = useState<'active' | 'completed'>('active');

    return (
        <>
            <div className={styles.changeTasksTypeDiv}>
                <Button text={setLocale(tgUser?.language_code).active} isActive={tasksType === 'active'}
                    onClick={() => setTasksType('active')} />
                <Button text={setLocale(tgUser?.language_code).completed} isActive={tasksType === 'completed'}
                    onClick={() => setTasksType('completed')} />
            </div>
            {
                tasks.result.tasks[tasksType].length > 0 ?
                    <div className={styles.tasksList}>
                        {tasks.result.tasks.active.map(t => (
                            <TaskItem key={t.id} id={t.id} name={t.name} tag={t.tag} award={t.award} />
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
