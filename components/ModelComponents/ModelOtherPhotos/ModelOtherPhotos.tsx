import { ModelOtherPhotosProps } from './ModelOtherPhotos.props';
import styles from './ModelOtherPhotos.module.css';
import Image from 'next/image';
import { useSetup } from '../../../hooks/useSetup';
import cn from 'classnames';


export const ModelOtherPhotos = ({ photos, setPhoto }: ModelOtherPhotosProps): JSX.Element => {
    const { webApp } = useSetup();

    return (
        <div className={styles.modelOtherPhotos}>
            {photos.map((p, i) => (
                <Image key={p} className={cn(styles.modelPhoto, {
                    [styles.weba]: webApp?.platform === 'weba',
                })} onClick={() => setPhoto(p)}
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
