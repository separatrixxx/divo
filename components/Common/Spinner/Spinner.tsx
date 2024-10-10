import styles from './Spinner.module.css';


export const Spinner = (): JSX.Element => {
    return (
        <div className={styles.spinnerWrapper}>
            <div className={styles.spinner} />
        </div>
    );
};
