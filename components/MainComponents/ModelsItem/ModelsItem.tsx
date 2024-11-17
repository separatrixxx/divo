import { ModelsItemProps } from './ModelsItem.props';
import styles from './ModelsItem.module.css';
import { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSetup } from '../../../hooks/useSetup';
import { useInView } from 'react-intersection-observer';
import cn from 'classnames';


export const ModelsItem = memo(({ id, random_photo, photo_index }: ModelsItemProps): JSX.Element => {
    const { webApp, tgUser } = useSetup();
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
        rootMargin: '100px',
    });

    const ext = random_photo.slice(random_photo.length - 4).toLowerCase();

    return (
        <Link href={`/model/${tgUser?.id}/${photo_index}/${id}`} className={cn(styles.modelsItem, {
            [styles.weba]: webApp?.platform === 'weba',
        })} aria-label='model link'>
            <div ref={ref} className={styles.imageContainer}>
                {
                    inView ?
                        <>
                            {
                                ext === 'webp' ?
                                    <Image className={styles.modelsItemPhoto}
                                        loader={() => random_photo}
                                        src={random_photo}
                                        alt={`${id} image`}
                                        width={500}
                                        height={500}
                                        unoptimized={true}
                                        priority={false}
                                        quality={10}
                                    />
                                    :
                                    <video className={styles.modelsItemPhoto} autoPlay playsInline loop muted no-controls >
                                        <source src={random_photo} type="video/mp4"></source>
                                    </video>
                            }
                        </>
                        : <></>
                }
            </div>
        </Link>
    );
});

ModelsItem.displayName = 'ModelsItem';
