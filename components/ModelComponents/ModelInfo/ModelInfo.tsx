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
import { numFormat } from '../../../helpers/format.helper';
import { setLocale } from '../../../helpers/locale.helper';


export const ModelInfo = ({ modelInfo }: ModelInfoProps): JSX.Element => {
    const { tgUser, user, models } = useSetup();

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isVoted, setIsVoted] = useState<boolean>(Boolean(models.result.models
        .find(el => el.id === modelInfo.id)?.user_voted));

    const [photo, setPhoto] = useState<string>(modelInfo.picked_photo_url);
    const [potentialReward, setPotentialReward] = useState<number | undefined>(modelInfo.potential_reward);
    const [award, setAward] = useState<number | undefined>(modelInfo.award);

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
                    <ModelStat type='eye' stat={numFormat(modelInfo.view_count)}
                        tooltip={setLocale(tgUser?.language_code).tooltips.total_views} />
                    <ModelStat type='coin' stat={award ? numFormat(award) : '?'}
                        tooltip={setLocale(tgUser?.language_code).tooltips.your_award} />
                    <ModelStat type='coin' stat={potentialReward ? numFormat(potentialReward) : '?'} isActive={true}
                        tooltip={setLocale(tgUser?.language_code).tooltips.potential_reward} />
                </div>
                <VoteButton modelId={modelInfo.id} isLoading={isLoading} isVoted={isVoted}
                    remainingVotes={user.result.remaining_votes} setIsLoading={setIsLoading}
                    setIsVoted={setIsVoted} setPotentialReward={setPotentialReward} setAward={setAward} />
            </div>
        </div>
    );
};
