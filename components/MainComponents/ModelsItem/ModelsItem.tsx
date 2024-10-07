import styles from './ModelsItem.module.css';
import { ModelItem } from '../../../interfaces/models.interface';
import Image from 'next/image';
import Link from 'next/link';


export const ModelsItem = ({ id, random_photo, view_count }: ModelItem): JSX.Element => {
    return (
        <div className={styles.modelsItem}>
            <Link href={'/model/' + id} className={styles.photoDiv}>
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
        </div>
    );
};
