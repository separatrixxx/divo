import { ModelOtherPhotosProps } from './ModelOtherPhotos.props';
import styles from './ModelOtherPhotos.module.css';
import Image from 'next/image';


export const ModelOtherPhotos = ({ photos, setPhoto }: ModelOtherPhotosProps): JSX.Element => {
    return (
        <div className={styles.modelOtherPhotos}>
            {photos.map((p, i) => (
                <Image key={p} className={styles.modelPhoto} onClick={() => setPhoto(p)}
                    draggable='false'
                    loader={() => p}
                    src={p}
                    alt={i + ' image'}
                    width={1}
                    height={1}
                    unoptimized={true}
                    priority
                />
            ))}
        </div>
    );
};
