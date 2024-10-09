import { ModelInfoProps } from './ModelInfo.props';
import styles from './ModelInfo.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { ModelStat } from '../ModelStat/ModelStat';
import { copyToClipboard } from '../../../helpers/clipboard.helper';
import { useState } from 'react';
import { VoteButton } from '../VoteButton/VoteButton';
import { ModelPhoto } from '../ModelPhoto/ModelPhoto';
import { ModelOtherPhotos } from '../ModelOtherPhotos/ModelOtherPhotos';


export const ModelInfo = ({ modelInfo }: ModelInfoProps): JSX.Element => {
    const { models } = useSetup();

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isVoted, setIsVoted] = useState<boolean>(Boolean(models.result.models
        .find(el => el.id === modelInfo.id)?.user_voted));

    const [photo, setPhoto] = useState<string>(modelInfo.photo_urls[0]);

    return (
        <div className={styles.modelInfo}>
            <ModelPhoto id={modelInfo.id} photo={photo} />
            {
                isVoted ?
                    <ModelOtherPhotos photos={modelInfo.photo_urls} setPhoto={setPhoto} />
                : <></>
            }
            <div className={styles.infoDiv}>
                <Htag tag='s' className={styles.modelId} onClick={() => copyToClipboard(modelInfo.id)}>
                    {modelInfo.id}
                </Htag>
                <div className={styles.statsDiv}>
                    <ModelStat type='eye' stat={modelInfo.view_count} />
                    <ModelStat type='coin' stat={'?'} />
                </div>
                <VoteButton modelId={modelInfo.id} isLoading={isLoading} isVoted={isVoted}
                    setIsLoading={setIsLoading} setIsVoted={setIsVoted} />
            </div>
        </div>
    );
};
