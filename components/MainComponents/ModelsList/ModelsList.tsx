import styles from './ModelsList.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { ModelsItem } from '../ModelsItem/ModelsItem';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import { ModelItem } from '../../../interfaces/models.interface';
import { LoadingDots } from '../../Common/LoadingDots/LoadingDots';
import { Spinner } from '../../Common/Spinner/Spinner';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { filterModels } from '../../../helpers/filter.helper';


export const ModelsList = (): JSX.Element => {
    const { tgUser, models, sort } = useSetup();

    const limit = 6;
    const [displayedModels, setDisplayedModels] = useState<ModelItem[]>(models.result.models.slice(0, limit));
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView && displayedModels.length < models.result.models.length) {
            const nextModels = models.result.models.slice(displayedModels.length, displayedModels.length + limit);
            setDisplayedModels(prevModels => [...prevModels, ...nextModels]);
        }
    }, [inView, models, displayedModels]);

    if (models.status !== 'success') {
        <div className={styles.modelsList}>
            <Spinner />
        </div>
    }

    if (filterModels(sort, models.result.models).length === 0) {
        return (
            <Htag tag='m' className={styles.noModelsFound}>
                {setLocale(tgUser?.language_code).no_models_found}
            </Htag>
        );
    }

    return (
        <>
            <div className={styles.modelsList}>
                {filterModels(sort, displayedModels).map(m => (
                    <ModelsItem key={m.id} id={m.id} random_photo={m.random_photo}
                        user_voted={m.user_voted} photo_index={m.photo_index} />
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
