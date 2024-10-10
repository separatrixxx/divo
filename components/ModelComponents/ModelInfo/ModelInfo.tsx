import { ModelInfoProps } from './ModelInfo.props';
import styles from './ModelInfo.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { ModelStat } from '../ModelStat/ModelStat';
import { copyToClipboard } from '../../../helpers/clipboard.helper';
import { useEffect, useRef, useState } from 'react';
import { VoteButton } from '../VoteButton/VoteButton';
import { ModelPhoto } from '../ModelPhoto/ModelPhoto';
import { ModelOtherPhotos } from '../ModelOtherPhotos/ModelOtherPhotos';
import { numFormat } from '../../../helpers/format.helper';
import { setLocale } from '../../../helpers/locale.helper';
import { Raffle } from '../Raffle/Raffle';


export const ModelInfo = ({ modelInfo }: ModelInfoProps): JSX.Element => {
    const { tgUser, user, models } = useSetup();

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isVoted, setIsVoted] = useState<boolean>(Boolean(models.result.models
        .find(el => el.id === modelInfo.id)?.user_voted));

    const [photo, setPhoto] = useState<string>(modelInfo.picked_photo_url);
    const [award, setAward] = useState<number | undefined>(modelInfo.award);
    const [raffleVisible, setRaffleVisible] = useState<boolean>(false);

    return (
        <div className={styles.modelInfo}>
            <div className={styles.infoDiv}>
                <VoteButton modelId={modelInfo.id} isLoading={isLoading} isVoted={isVoted}
                    remainingVotes={user.result.remaining_votes} setIsLoading={setIsLoading}
                    setIsVoted={setIsVoted} setAward={setAward} setRaffleVisible={setRaffleVisible} />
                {
                    isVoted ?
                        <div className={styles.statsDiv}>
                            <Raffle target={award} default_award={modelInfo.default_award} isVisible={raffleVisible}
                                setIsVisible={setRaffleVisible} />
                            <ModelStat type='eye' stat={numFormat(modelInfo.view_count)}
                                tooltip={setLocale(tgUser?.language_code).tooltips.total_views} />
                            <ModelStat type='coin' stat={award ? numFormat(award) : '?'}
                                tooltip={setLocale(tgUser?.language_code).tooltips.your_award} />
                        </div>
                    : <></>
                }
            </div>
            <ModelPhoto id={modelInfo.id} photo={photo} />
            {
                isVoted ?
                    <ModelOtherPhotos photos={modelInfo.photo_urls} setPhoto={setPhoto} />
                : <></>
            }
        </div>
    );
};
