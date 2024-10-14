import { TaskButtonProps } from './TaskButton.props';
import styles from './TaskButton.module.css';
import { Htag } from '../../Common/Htag/Htag';
import { useSetup } from '../../../hooks/useSetup';
import cn from 'classnames';


export const TaskButton = ({ text, isLoading, isCompleted, onClick }: TaskButtonProps): JSX.Element => {
    const { webApp } = useSetup();

    return (
        <div className={cn(styles.taskButton, {
            [styles.completed]: isCompleted,
            [styles.weba]: webApp?.platform === 'weba',
        })} onClick={!isCompleted ? onClick : () => {}}>
            <Htag tag='xs' className={cn(styles.text, {
                [styles.hidden]: isLoading,
            })}>
                {text}
            </Htag>
            {

                isLoading ?
                    <div className={styles.spinner} />
                : <></>
            }
        </div>
    );
};
