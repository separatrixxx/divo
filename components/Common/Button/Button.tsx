import { ButtonProps } from './Button.props';
import styles from './Button.module.css';
import { Htag } from '../Htag/Htag';
import cn from 'classnames';


export const Button = ({ text, isActive, onClick }: ButtonProps): JSX.Element => {
    return (
        <div className={cn(styles.button, {
            [styles.active]: isActive,
        })} onClick={onClick}>
            <Htag tag='m' className={styles.text}>
                {text}
            </Htag>
        </div>
    );
};
