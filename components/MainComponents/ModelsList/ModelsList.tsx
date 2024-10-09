import styles from './ModelsList.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { ModelsItem } from '../ModelsItem/ModelsItem';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import { ModelItem } from '../../../interfaces/models.interface';
import { LoadingDots } from '../../Common/LoadingDots/LoadingDots';
import { Spinner } from '../../Common/Spinner/Spinner';


export const ModelsList = (): JSX.Element => {
    const { models } = useSetup();

    const limit = 6;
    const [displayedModels, setDisplayedModels] = useState<ModelItem[]>([]);
    const [ref, inView] = useInView();

    useEffect(() => {
        if (models.status === 'success') {
            setDisplayedModels(models.result.models.slice(0, limit));
        }
    }, [models]);

    useEffect(() => {
        if (inView && displayedModels.length < models.result.models.length) {
            const nextModels = models.result.models.slice(displayedModels.length, displayedModels.length + limit);
            setDisplayedModels(prevModels => [...prevModels, ...nextModels]);
        }
    }, [inView, models, displayedModels]);

    return (
        <>
            <div className={styles.modelsList}>
                {
                    models.status === 'success' ?
                        <>
                            {displayedModels.map(m => (
                                <ModelsItem key={m.id} id={m.id} random_photo={m.random_photo}
                                    user_voted={m.user_voted} />
                            ))}
                        </>
                    : <Spinner />
                }
            </div>
            {
                models.result.models.length !== displayedModels.length && models.status === 'success' ?
                    <div ref={ref} className={styles.loadingIndicator}>
                        <LoadingDots />
                    </div>
                    : <></>
            }
        </>
    );
};
