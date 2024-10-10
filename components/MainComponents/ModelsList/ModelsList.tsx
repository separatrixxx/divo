import { ModelsListProps } from './ModelsList.props';
import styles from './ModelsList.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { ModelsItem } from '../ModelsItem/ModelsItem';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import { ModelItem } from '../../../interfaces/models.interface';
import { LoadingDots } from '../../Common/LoadingDots/LoadingDots';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { filterModels } from '../../../helpers/filter.helper';
import { Spinner } from '../../Common/Spinner/Spinner';


export const ModelsList = ({ type }: ModelsListProps): JSX.Element => {
    const { tgUser, models } = useSetup();
    const limit = 10;

    const [displayedModels, setDisplayedModels] = useState<ModelItem[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });

    useEffect(() => {
        if (models.status === 'success') {
            const allModels = filterModels(type, models.result.models);
            const modelsToDisplay = allModels.slice(0, limit * currentPage);
            setDisplayedModels(modelsToDisplay);
        }
    }, [models, type, currentPage]);

    useEffect(() => {
        if (inView && displayedModels.length < models.result.models.length) {
            setCurrentPage(prevPage => prevPage + 1);
        }
    }, [inView, models.result.models.length, displayedModels.length]);

    if (models.status !== 'success') {
        return (
            <div className={styles.modelsList}>
                <Spinner />
            </div>
        );
    }

    if (filterModels(type, models.result.models).length === 0) {
        return (
            <Htag tag='m' className={styles.noModelsFound}>
                {setLocale(tgUser?.language_code).no_models_found}
            </Htag>
        );
    }

    return (
        <>
            <div className={styles.modelsList}>
                {displayedModels.map((m) => (
                    <ModelsItem 
                        key={m.id} 
                        id={m.id} 
                        random_photo={m.random_photo}
                        photo_index={m.photo_index} 
                        user_voted={m.user_voted} 
                    />
                ))}
            </div>
            {
                filterModels(type, models.result.models).length !== displayedModels.length ?
                    <div ref={ref} className={styles.loadingIndicator}>
                        <LoadingDots />
                    </div>
                : <></>
            }
        </>
    );
};
