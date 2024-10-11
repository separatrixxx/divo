import { TaskButtonProps } from './TaskButton.props';
import styles from './TaskButton.module.css';
import { Htag } from '../../Common/Htag/Htag';
import cn from 'classnames';


export const TaskButton = ({ text, isLoading, isCompleted, onClick }: TaskButtonProps): JSX.Element => {
    return (
        <div className={cn(styles.taskButton, {
            [styles.completed]: isCompleted,
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
