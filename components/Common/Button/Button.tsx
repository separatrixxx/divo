import { ButtonProps } from './Button.props';
import styles from './Button.module.css';
import { Htag } from '../Htag/Htag';
import { useSetup } from '../../../hooks/useSetup';
import CopyIcon from './copy.svg';
import cn from 'classnames';


export const Button = ({ text, isCopy, isActive, onClick }: ButtonProps): JSX.Element => {
    const { webApp } = useSetup();

    return (
        <div className={cn(styles.button, {
            [styles.copyIcon]: isCopy,
            [styles.active]: isActive,
            [styles.weba]: webApp?.platform === 'weba',
        })} onClick={onClick}>
            {
                !isCopy ?
                    <Htag tag='m' className={styles.text}>
                        {text}
                    </Htag>
                : 
                    <CopyIcon />
            }
        </div>
    );
};
