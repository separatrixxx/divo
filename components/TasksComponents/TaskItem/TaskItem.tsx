import { TaskItemProps } from './TaskItem.props';
import styles from './TaskItem.module.css';
import { Htag } from '../../Common/Htag/Htag';
import { useSetup } from '../../../hooks/useSetup';
import { setLocale } from '../../../helpers/locale.helper';
import { TaskButton } from '../TaskButton/TaskButton';
import { useState } from 'react';
import { ProgressBar } from '../ProgressBar/ProgressBar';
import { checkTasks } from '../../../helpers/tasks.helper';
import BurnIcon from './burn.svg';
import cn from 'classnames';


export const TaskItem = ({ taskId, name, tag, award, current, target, isCompleted }: TaskItemProps): JSX.Element => {
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
                    {'+' + award + ' ' + setLocale(tgUser?.language_code).token + ' | +1'}
                    <BurnIcon className={styles.burnIcon} />
                </Htag>
            </div>
            <TaskButton text={setLocale(tgUser?.language_code)[isCompleted ? 'completed' : 'check']}
                isLoading={isLoading} isCompleted={isCompleted} onClick={() => {
                    if (!isCompleted && taskId) {
                        checkTasks(
                            {
                                router: router,
                                webApp: webApp,
                                dispatch: dispatch,
                                tgUser: tgUser,
                                taskId: taskId,
                                setIsLoading: setIsLoading,
                            });
                    }
                }} />
        </div>
    );
};