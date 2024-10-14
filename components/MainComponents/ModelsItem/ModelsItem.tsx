import styles from './ModelsItem.module.css';
import { ModelItem } from '../../../interfaces/models.interface';
import Image from 'next/image';
import Link from 'next/link';
import BurnIcon from './burn.svg';
import { useSetup } from '../../../hooks/useSetup';
import cn from 'classnames';


export const ModelsItem = ({ id, random_photo, photo_index, user_voted }: ModelItem): JSX.Element => {
    const { webApp, tgUser } = useSetup();

    return (
        <Link href={`/model/${tgUser?.id}/${photo_index}/${id}`} className={cn(styles.modelsItem, {
            [styles.isVoted]: user_voted,
            [styles.weba]: webApp?.platform === 'weba',
        })} aria-label='model link'>
            {
                user_voted ?
                    <BurnIcon className={styles.burnIcon} />
                : <></>
            }
            <Image className={styles.modelsItemPhoto} draggable='false'
                loader={() => random_photo}
                src={random_photo}
                alt={id + ' image'}
                width={1}
                height={1}
                unoptimized={true}
                priority
            />
        </Link>
    );
};
