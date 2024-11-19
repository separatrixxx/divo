import styles from './StartScreen.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { useEffect, useState } from 'react';


export const StartScreen = (): JSX.Element => {
    const { tgUser } = useSetup();
    const [progress, setProgress] = useState<number>(0);

    const interval = 130;

    useEffect(() => {
        let currentStep = 0;

        const weightedSteps = [1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5];
        const getRandomStep = () => weightedSteps[Math.floor(Math.random() * weightedSteps.length)];

        const intervalId = setInterval(() => {
            currentStep += 1;
            const randomIncrement = getRandomStep();

            setProgress(prevProgress => {
                const newProgress = Math.min(prevProgress + randomIncrement, interval);
                return newProgress;
            });
        }, interval);

        setTimeout(() => setProgress(interval), 5400);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className={styles.startScreen}>
            <div className={styles.startScreenDiv}>
                <Htag tag='xxxxl' className={styles.startScreenTitle}>
                    {setLocale(tgUser?.language_code).divo}
                </Htag>
                <Htag tag='s' className={styles.startScreenText}>
                    {setLocale(tgUser?.language_code).slogan}
                </Htag>
            </div>
            <video className={styles.video} autoPlay playsInline loop muted no-controls >
                <source src="/StartVideo.MP4" type="video/mp4"></source>
            </video>
            <div className={styles.progressBar}
                style={{
                    background: `linear-gradient(to right,
                    var(--primary) ${Math.min(progress, interval)}%, 
                    rgba(255, 255, 255, 0.07) ${Math.min(progress, interval)}%)`
                }} />
        </div>
    );
};
