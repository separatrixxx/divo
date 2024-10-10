import { ProgressBarProps } from './ProgressBar.props';
import styles from './ProgressBar.module.css';


export const ProgressBar = ({ current, target }: ProgressBarProps): JSX.Element => {
    return (
        <div className={styles.progressBar}
            style={{ background: `linear-gradient(to right,
                var(--primary) ${Math.min((current / target) * 100, 100)}%, 
                rgba(255, 255, 255, 0.07) ${Math.min((current / target) * 100, 100)}%)` }} />
    );
};
