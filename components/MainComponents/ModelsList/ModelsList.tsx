import styles from './ModelsList.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { ModelsItem } from '../ModelsItem/ModelsItem';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import { ModelItem } from '../../../interfaces/models.interface';
import { Spinner } from '../../Common/Spinner/Spinner';
import { LoadingDots } from '../../Common/LoadingDots/LoadingDots';


export const ModelsList = (): JSX.Element => {
    const { models } = useSetup();
    console.log(models.result.models.length)

    const limit = 6;
    const [displayedModels, setDisplayedModels] = useState<ModelItem[]>(models.result.models.slice(0, limit));
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView && displayedModels.length < models.result.models.length) {
            const nextModels = models.result.models.slice(displayedModels.length, displayedModels.length + limit);
            setDisplayedModels(prevModels => [...prevModels, ...nextModels]);
        }
    }, [inView, models, displayedModels]);

    return (
        <>
            <div className={styles.modelsList}>
                {displayedModels.map(m => (
                    <ModelsItem key={m.id} id={m.id} random_photo={m.random_photo} view_count={m.view_count} />
                ))}
            </div>
            {
                models.result.models.length !== displayedModels.length ?
                    <div ref={ref} className={styles.loadingIndicator}>
                        <LoadingDots />
                    </div>
                : <></>
            }
        </>
    );
};
