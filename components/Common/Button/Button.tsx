import { ButtonProps } from './Button.props';
import styles from './Button.module.css';
import { Htag } from '../Htag/Htag';
import { useSetup } from '../../../hooks/useSetup';
import CopyIcon from './copy.svg';
import cn from 'classnames';


export const Button = ({ text, isCopy, isActive, isLoading, isDisabled, onClick }: ButtonProps): JSX.Element => {
    const { webApp } = useSetup();

    return (
        <div className={cn(styles.button, {
            [styles.copyIcon]: isCopy,
            [styles.active]: isActive,
            [styles.weba]: webApp?.platform === 'weba',
            [styles.disableButton]: isDisabled,
        })} onClick={onClick}>
            {
                !isCopy && !isLoading ?
                    <Htag tag='m' className={styles.text}>
                        {text}
                    </Htag>
                : isLoading ?
                    <div className={styles.spinner} />
                : <CopyIcon />
            }
        </div>
    );
};
