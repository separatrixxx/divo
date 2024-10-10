import { VoteButtonProps } from './VoteButton.props';
import styles from './VoteButton.module.css';
import { Htag } from '../../Common/Htag/Htag';
import BurnIcon from './burn.svg';
import LogoIcon from './logo.svg';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { setLocale } from '../../../helpers/locale.helper';
import { useSetup } from '../../../hooks/useSetup';
import { voteForModel } from '../../../helpers/models.helper';
import cn from 'classnames';


export const VoteButton = ({ modelId, isLoading, isVoted, remainingVotes, setIsLoading, setIsVoted,
    setAward, setRaffleVisible }: VoteButtonProps): JSX.Element => {
    const { router, webApp, tgUser } = useSetup();

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
            [styles.isVotedButton]: isVoted || remainingVotes <= 0,
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
                    handleClick: handleClick,
                });
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
                                : setLocale(tgUser?.language_code).you_have_no_votes_left
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
