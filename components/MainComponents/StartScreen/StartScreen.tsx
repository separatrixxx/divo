import styles from './StartScreen.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import Link from 'next/link';
import cn from 'classnames';
import { ByBlock } from '../../Common/ByBlock/ByBlock';


export const StartScreen = (): JSX.Element => {
    const { webApp, tgUser } = useSetup();

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
        </div>
    );
};
