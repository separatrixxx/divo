import { TaskItemProps } from './TaskItem.props';
import styles from './TaskItem.module.css';
import { Htag } from '../../Common/Htag/Htag';
import { useSetup } from '../../../hooks/useSetup';
import { setLocale } from '../../../helpers/locale.helper';
import { TaskButton } from '../TaskButton/TaskButton';
import { useState } from 'react';
import cn from 'classnames';
import { ProgressBar } from '../ProgressBar/ProgressBar';
import { checkTasks } from '../../../helpers/tasks.helper';


export const TaskItem = ({ name, tag, award, current, target, isCompleted }: TaskItemProps): JSX.Element => {
    const { router, dispatch, webApp, tgUser } = useSetup();

    const [isLoading, setIsLoading] = useState<boolean>(false);

    return (
        <div className={cn(styles.taskItem, {
            [styles.completed]: isCompleted,
        })}>
            <div className={styles.taskInfo}>
                <Htag tag='xs' className={styles.tag}>
                    {tag}
                </Htag>
                {
                    !isCompleted ?
                        <ProgressBar current={current} target={target} />
                    : <></>
                }
                <Htag tag='s' className={styles.name}>
                    {name}
                </Htag>
                <Htag tag='xs' className={styles.award}>
                    {'+' + award + ' ' + setLocale(tgUser?.language_code).token}
                </Htag>
            </div>
            {
                !isCompleted ?
                    <TaskButton text={setLocale(tgUser?.language_code).check} isLoading={isLoading}
                        setIsLoading={setIsLoading} onClick={() => checkTasks({
                            router: router,
                            webApp: webApp,
                            dispatch: dispatch,
                            tgUser: tgUser,
                        })} />
                    : <></>
            }
        </div>
    );
};
