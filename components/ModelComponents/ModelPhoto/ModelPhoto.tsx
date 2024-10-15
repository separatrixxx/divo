import { ModelPhotoProps } from './ModelPhoto.props';
import styles from './ModelPhoto.module.css';
import Image from 'next/image';


export const ModelPhoto = ({ id, photo }: ModelPhotoProps): JSX.Element => {
    return (
        <div className={styles.modelPhoto}>
            <Image className={styles.photo}
                draggable='false'
                loader={() => photo}
                src={photo}
                alt={id + ' image'}
                width={1}
                height={1}
                unoptimized={true}
                priority
                quality={20}
            />
        </div>
    );
};
