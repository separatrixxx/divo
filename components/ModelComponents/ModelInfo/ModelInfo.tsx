import { ModelInfoProps } from './ModelInfo.props';
import styles from './ModelInfo.module.css';
import { useSetup } from '../../../hooks/useSetup';
import Image from 'next/image';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';


export const ModelInfo = ({ modelInfo }: ModelInfoProps): JSX.Element => {
    const { router } = useSetup();

    return (
        <div className={styles.modelInfo}>
            <div className={styles.photoDiv}>
                <Image className={styles.modelsItemPhoto} draggable='false'
                    loader={() => modelInfo.photo_urls[0]}
                    src={modelInfo.photo_urls[0]}
                    alt={modelInfo.id + ' image'}
                    width={1}
                    height={1}
                    unoptimized={true}
                    priority
                />
            </div>
            <Htag tag='s'>
                {setLocale(router.locale).id + ': ' + modelInfo.id}
            </Htag>
            <Htag tag='s'>
                {setLocale(router.locale).award + ': ' + modelInfo.default_award}
            </Htag>
            <Htag tag='s'>
                {setLocale(router.locale).views + ': ' + modelInfo.view_count}
            </Htag>
            <Htag tag='s'>
                {setLocale(router.locale).votes + ': ' + modelInfo.voted_users_count}
            </Htag>
        </div>
    );
};
