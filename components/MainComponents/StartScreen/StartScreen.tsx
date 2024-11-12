import styles from './StartScreen.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import cn from 'classnames';


export const StartScreen = (): JSX.Element => {
    const { webApp, tgUser } = useSetup();
    const [progress, setProgress] = useState<number>(0);

    useEffect(() => {
        const interval = 100;
        let currentStep = 0;

        const weightedSteps = [1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5];
        const getRandomStep = () => weightedSteps[Math.floor(Math.random() * weightedSteps.length)];

        const intervalId = setInterval(() => {
            currentStep += 1;
            const randomIncrement = getRandomStep();

            setProgress(prevProgress => {
                const newProgress = Math.min(prevProgress + randomIncrement, 100);
                return newProgress;
            });
        }, interval);

        setTimeout(() => setProgress(100), 5400);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className={styles.startScreen}>
            <div className={styles.startTextDiv}>
                <Htag tag='xxxl' className={styles.startScreenTitle}>
                    {setLocale(tgUser?.language_code).divo}
                </Htag>
                <Htag tag='l' className={styles.startScreenText}>
                    {setLocale(tgUser?.language_code).slogan}
                </Htag>
            </div>
            <Link href={process.env.NEXT_PUBLIC_CHANNEL_LINK || '/'} className={cn(styles.joinChannelLink, {
                [styles.weba]: webApp?.platform === 'weba',
            })}>
                <Htag tag='l' className={styles.startScreenText}>
                    {setLocale(tgUser?.language_code).join_our_channel}
                </Htag>
            </Link>
            <video className={styles.video} autoPlay playsInline loop muted no-controls >
                <source src="/StartVideo.MP4" type="video/mp4"></source>
            </video>
            <div className={styles.progressBar}
                style={{
                    background: `linear-gradient(to right,
                    var(--primary) ${Math.min(progress, 100)}%, 
                    rgba(255, 255, 255, 0.07) ${Math.min(progress, 100)}%)`
                }} />
        </div>
    );
};
