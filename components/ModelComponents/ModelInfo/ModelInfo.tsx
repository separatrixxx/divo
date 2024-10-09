import { ModelInfoProps } from './ModelInfo.props';
import styles from './ModelInfo.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { ModelStat } from '../ModelStat/ModelStat';
import { numFormat } from '../../../helpers/format.helper';
import { copyToClipboard } from '../../../helpers/clipboard.helper';
import { useState } from 'react';
import { VoteButton } from '../VoteButton/VoteButton';
import { ModelPhoto } from '../ModelPhoto/ModelPhoto';


export const ModelInfo = ({ modelInfo }: ModelInfoProps): JSX.Element => {
    const { router, webApp, models } = useSetup();

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isVoted, setIsVoted] = useState<boolean>(Boolean(models.result.models
        .find(el => el.id === modelInfo.id)?.user_voted));

    return (
        <div className={styles.modelInfo}>
            <ModelPhoto id={modelInfo.id} photo={modelInfo.photo_urls[0]} />
            <div className={styles.infoDiv}>
                <Htag tag='s' className={styles.modelId} onClick={() => copyToClipboard(modelInfo.id)}>
                    {modelInfo.id}
                </Htag>
                <div className={styles.statsDiv}>
                    <ModelStat type='eye' stat={numFormat(modelInfo.view_count)} />
                    <ModelStat type='burn' stat={numFormat(modelInfo.voted_users_count + Number(isVoted))} />
                    <ModelStat type='coin' stat={numFormat(modelInfo.default_award)} />
                </div>
                <VoteButton modelId={modelInfo.id} isLoading={isLoading} isVoted={isVoted}
                    setIsLoading={setIsLoading} setIsVoted={setIsVoted} />
            </div>
        </div>
    );
};
