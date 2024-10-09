import styles from './ModelsItem.module.css';
import { ModelItem } from '../../../interfaces/models.interface';
import Image from 'next/image';
import Link from 'next/link';
import BurnIcon from './burn.svg';
import cn from 'classnames';


export const ModelsItem = ({ id, random_photo, user_voted }: ModelItem): JSX.Element => {
    return (
        <Link href={'/model/' + id} aria-label='model link' className={cn(styles.modelsItem, {
            [styles.isVoted]: user_voted,
        })}>
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
