import styles from './ModelsItem.module.css';
import { ModelItem } from '../../../interfaces/models.interface';
import { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSetup } from '../../../hooks/useSetup';
import { useInView } from 'react-intersection-observer';
import cn from 'classnames';


export const ModelsItem = memo(({ id, random_photo, photo_index, user_voted }: ModelItem): JSX.Element => {
    const { webApp, tgUser } = useSetup();
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
        rootMargin: '100px',
    });

    return (
        <Link href={`/model/${tgUser?.id}/${photo_index}/${id}`} className={cn(styles.modelsItem, {
            [styles.weba]: webApp?.platform === 'weba',
        })} aria-label='model link'>
            <div ref={ref} className={styles.imageContainer}>
                {
                    inView ?
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
                    : <></>
                }
            </div>
        </Link>
    );
});

ModelsItem.displayName = 'ModelsItem';
