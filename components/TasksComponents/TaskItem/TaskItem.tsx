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


export const TaskItem = ({ taskId, tag, award, task_day, task_metadata, current, target, isCompleted }: TaskItemProps): JSX.Element => {
    const { router, dispatch, webApp, tgUser } = useSetup();

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const referenceDate = new Date('2024-10-16T00:00:00');
    const currentDate = new Date();
    const daysPassed = Math.floor((currentDate.getTime() - referenceDate.getTime()) / (1000 * 60 * 60 * 24));

    return (
        <div className={cn(styles.taskItem, {
            [styles.completed]: isCompleted || daysPassed + 1 !== task_day,
        })}>
            <div className={cn(styles.taskInfo, {
                [styles.channelLink]: task_metadata && task_metadata.chanel_id,
            })} onClick={() => {
                if (task_metadata && task_metadata.task_url) {
                    webApp?.openLink(task_metadata.task_url);
                }
            }}>
                <Htag tag='xs' className={styles.tag}>
                    {setLocale(tgUser?.language_code).task_tags[tag as 'referral']}
                </Htag>
                {
                    !isCompleted && daysPassed + 1 === task_day ?
                        <ProgressBar current={current} target={target} />
                    : <></>
                }
                <Htag tag='s' className={styles.name}>
                    {setLocale(tgUser?.language_code).task_texts[tag as 'referral'] +
                        (task_metadata && task_metadata.require ? ': ' + task_metadata.require : '')}
                </Htag>
                <Htag tag='xs' className={styles.award}>
                    {'+1'}
                    <BurnIcon className={styles.burnIcon} />
                </Htag>
            </div>
            <TaskButton text={setLocale(tgUser?.language_code)[isCompleted ? 'completed' : 'check']}
                isLoading={isLoading} isCompleted={isCompleted || daysPassed + 1 !== task_day} onClick={() => {
                    if (!isCompleted && daysPassed + 1 === task_day && taskId) {
                        checkTasks({
                            router: router,
                            webApp: webApp,
                            dispatch: dispatch,
                            tgUser: tgUser,
                            taskId: taskId,
                            taskUrl: task_metadata?.task_url,
                            setIsLoading: setIsLoading,
                        });
                    }
                }} />
        </div>
    );
};
