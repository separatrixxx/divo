import { TaskButtonProps } from './TaskButton.props';
import styles from './TaskButton.module.css';
import { Htag } from '../../Common/Htag/Htag';
import cn from 'classnames';


export const TaskButton = ({ text, isLoading, setIsLoading, onClick }: TaskButtonProps): JSX.Element => {
    return (
        <div className={styles.taskButton} onClick={onClick}>
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
