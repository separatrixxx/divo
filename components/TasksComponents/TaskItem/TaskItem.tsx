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
import FriendIcon from './friend.svg';
import InstagramIcon from './instagram.svg';
import TelegramIcon from './telegram.svg';
import TwitterIcon from './twitter.svg';
import YoutubeIcon from './youtube.svg';
import CoinIcon from './coin.svg';
import cn from 'classnames';


export const TaskItem = ({ taskId, name, task_metadata, current, target, isCompleted }: TaskItemProps): JSX.Element => {
    const { router, dispatch, webApp, tgUser } = useSetup();

    const [isLoading, setIsLoading] = useState<boolean>(false);

    let TagIcon = FriendIcon;

    if (task_metadata?.task === 'twitter') {
        TagIcon = TwitterIcon;
    } else if (task_metadata?.task === 'telegram' || task_metadata?.task === 'comment') {
        TagIcon = TelegramIcon;
    } else if (task_metadata?.task === 'instagram') {
        TagIcon = InstagramIcon;
    } else if (task_metadata?.task === 'youtube') {
        TagIcon = YoutubeIcon;
    } else if (task_metadata?.task === 'staking') {
        TagIcon = CoinIcon;
    } else {
        TagIcon = FriendIcon;
    }

    return (
        <div className={cn(styles.taskItem, {
            [styles.completed]: isCompleted,
        })}>
            <div className={cn(styles.taskInfo, {
                [styles.channelLink]: task_metadata && task_metadata.chanel_id,
            })} onClick={() => {
                if (task_metadata && task_metadata.task_url) {
                    webApp?.openLink(task_metadata.task_url);
                }
            }}>
                <div className={styles.tagDiv}>
                    <TagIcon className={styles.tag} />
                    <Htag tag='s' className={styles.name}>
                        {setLocale(tgUser?.language_code).task_texts[task_metadata?.task as 'referral']
                            .replace('$$$', name) +
                            (task_metadata && task_metadata.require ? ': ' + task_metadata.require : '')}
                    </Htag>
                </div>
                {
                    !isCompleted && current !== undefined && target ?
                        <ProgressBar current={current} target={target} />
                        : <></>
                }
            </div>
            <div className={styles.taskButtonDiv}>
                <TaskButton text={setLocale(tgUser?.language_code)[isCompleted ? 'completed' : 'check']}
                    isLoading={isLoading} isCompleted={isCompleted} onClick={() => {
                        if (!isCompleted && taskId) {
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
                {
                    !isCompleted &&
                    <Htag tag='s' className={styles.award}>
                        {'+1'}
                        <BurnIcon className={styles.burnIcon} />
                    </Htag>
                }
            </div>
        </div>
    );
};
