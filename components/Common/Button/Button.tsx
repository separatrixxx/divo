import { ButtonProps } from './Button.props';
import styles from './Button.module.css';
import { Htag } from '../Htag/Htag';
import { useSetup } from '../../../hooks/useSetup';
import CopyIcon from './copy.svg';
import cn from 'classnames';


export const Button = ({ text, isCopy, isActive, isLoading, isDisabled, isPopup, className, onClick }: ButtonProps): JSX.Element => {
    const { webApp } = useSetup();

    return (
        <div className={cn(styles.button, className, {
            [styles.copyIcon]: isCopy,
            [styles.active]: isActive,
            [styles.weba]: !isPopup && webApp?.platform === 'weba',
            [styles.disableButton]: isDisabled,
            [styles.popupButton]: isPopup,
            [styles.webaPopup]: isPopup && webApp?.platform === 'weba',
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
