import styles from './StartScreen.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import Link from 'next/link';
import cn from 'classnames';


export const StartScreen = (): JSX.Element => {
    const { webApp, tgUser } = useSetup();

    return (
        <div className={styles.startScreen}>
            <div className={styles.startTextDiv}>
                <Htag tag='xl' className={styles.startScreenTitle}>
                    {setLocale(tgUser?.language_code).divo}
                </Htag>
                <Htag tag='m' className={styles.startScreenText}>
                    {setLocale(tgUser?.language_code).slogan}
                </Htag>
            </div>
            <Link href={process.env.NEXT_PUBLIC_CHANNEL_LINK || '/'} className={cn(styles.joinChannelLink, {
                [styles.weba]: webApp?.platform === 'weba',
            })}>
                <Htag tag='m' className={styles.startScreenText}>
                    {setLocale(tgUser?.language_code).join_our_channel}
                </Htag>
            </Link>
            <div className={styles.videoWrapper}>
                <div className={styles.overlayTop}></div>
                <video className={styles.video} autoPlay playsInline loop muted no-controls >
                    <source src="/StartVideo.MP4" type="video/mp4"></source>
                </video>
                <div className={styles.overlayBottom}></div>
            </div>
        </div>
    );
};
