import { VoteButtonProps } from './VoteButton.props';
import styles from './VoteButton.module.css';
import { Htag } from '../../Common/Htag/Htag';
import BurnIcon from './burn.svg';
import { setLocale } from '../../../helpers/locale.helper';
import { useSetup } from '../../../hooks/useSetup';
import { voteForModel } from '../../../helpers/models.helper';
import cn from 'classnames';


export const VoteButton = ({ modelId, isLoading, isVoted, remainingVotes, setIsLoading, setIsVoted,
    setAward, setRaffleVisible }: VoteButtonProps): JSX.Element => {
    const { router, webApp, tgUser } = useSetup();
    
    return (
        <div className={cn(styles.voteButton, {
            [styles.isVotedButton]: isVoted,
            [styles.weba]: webApp?.platform === 'weba',
        })} onClick={() => {
            if (!isVoted && remainingVotes > 0) {
                voteForModel({
                    router: router,
                    webApp: webApp,
                    tgUser: tgUser,
                    modelId: modelId,
                    setIsLoading: setIsLoading,
                    setIsVoted: setIsVoted,
                    setAward: setAward,
                    setRaffleVisible: setRaffleVisible,
                });
            } else if (remainingVotes <= 0) {
                router.push('/tasks');
            }
        }}>
            {
                !isLoading ? 
                    <div className={styles.buttonDiv}>
                        <BurnIcon className={cn(styles.voteIcon, {
                            [styles.isVoted]: isVoted,
                        })} />
                        <Htag tag='m' className={styles.text}>
                        {
                                isVoted ? 
                                    setLocale(tgUser?.language_code).you_already_voted
                                : remainingVotes > 0 ? 
                                    setLocale(tgUser?.language_code).vote
                                : setLocale(tgUser?.language_code).get_more_votes
                            }
                        </Htag>
                    </div>
                : <div className={styles.spinner} />
            }
        </div>
    );
};
