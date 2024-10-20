import { VoteButtonProps } from './VoteButton.props';
import styles from './VoteButton.module.css';
import { Htag } from '../../Common/Htag/Htag';
import BurnIcon from './burn.svg';
import LogoIcon from './logo.svg';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { setLocale } from '../../../helpers/locale.helper';
import { useSetup } from '../../../hooks/useSetup';
import { voteForModel } from '../../../helpers/models.helper';
import { formatTime } from '../../../helpers/format.helper';
import cn from 'classnames';


export const VoteButton = ({ modelId, isLoading, isVoted, remainingVotes, setIsLoading, setIsVoted,
    setAward, setRaffleVisible }: VoteButtonProps): JSX.Element => {
    const { router, webApp, tgUser, user } = useSetup();

    const lastVoteDateUTC = new Date(user.result.last_vote_datetime);
    const timeZoneOffset = lastVoteDateUTC.getTimezoneOffset() * 60000;
    const localCastVoteDate = new Date(lastVoteDateUTC.getTime() - timeZoneOffset);    const currentDate = new Date();

    const timeDifference = currentDate.getTime() - localCastVoteDate.getTime();
    const minutesSinceLastVote = Math.floor(timeDifference / (1000 * 60));
    const timeToVote = Number(process.env.NEXT_PUBLIC_MINUTES_TO_VOTE);

    const [timeLeft, setTimeLeft] = useState<number>(timeToVote * 60 - (timeDifference / 1000));


    useEffect(() => {
        if (!isVoted && minutesSinceLastVote < timeToVote) {
            const interval = setInterval(() => {
                setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [minutesSinceLastVote, timeToVote, isVoted]);
    
    const [isClicked, setIsClicked] = useState<boolean>(false);

    const flightDuration = 1.5;
    const spawnDuration = 1.2;
    const maxDistance = 220;

    const handleClick = () => {
        setIsClicked(true);
        setTimeout(() => setIsClicked(false), flightDuration * 1000);
    };

    const getRandomRotation = () => Math.floor(Math.random() * 360);

    const iconVariants = {
        hidden: { opacity: 1, scale: 0 },
        visible: () => ({
            opacity: 0,
            scale: 1,
            x: Math.random() * maxDistance - maxDistance / 2,
            y: -(Math.random() * maxDistance),
            rotate: getRandomRotation(),
            transition: {
                duration: flightDuration,
                type: 'spring',
                stiffness: 150,
                damping: 30,
            }
        }),
        exit: { opacity: 0, scale: 0, transition: { duration: spawnDuration } }
    };

    return (
        <div className={cn(styles.voteButton, {
            [styles.isVotedButton]: isVoted,
            [styles.disableButton]: minutesSinceLastVote < timeToVote,
            [styles.weba]: webApp?.platform === 'weba',
        })} onClick={() => {
            if (!isVoted && remainingVotes > 0 && minutesSinceLastVote >= timeToVote) {
                voteForModel({
                    router: router,
                    webApp: webApp,
                    tgUser: tgUser,
                    modelId: modelId,
                    setIsLoading: setIsLoading,
                    setIsVoted: setIsVoted,
                    setAward: setAward,
                    setRaffleVisible: setRaffleVisible,
                    handleClick: handleClick,
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
                                : minutesSinceLastVote < timeToVote ? 
                                    formatTime(timeLeft)
                                : remainingVotes > 0 ? 
                                    setLocale(tgUser?.language_code).vote
                                : setLocale(tgUser?.language_code).get_more_votes
                            }
                        </Htag>
                        {
                            isClicked ?
                                Array.from({ length: 10 }).map((_, i) => (
                                    <motion.div key={i}
                                        custom={i}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        className={styles.iconWrapper}
                                        variants={iconVariants}>
                                        <LogoIcon className={styles.logoIcon} />
                                    </motion.div>
                                ))
                                : <></>
                        }
                    </div>
                : <div className={styles.spinner} />
            }
        </div>
    );
};
