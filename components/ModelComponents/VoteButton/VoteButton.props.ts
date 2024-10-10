import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';


export interface VoteButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    modelId: string,
    isLoading?: boolean,
    isVoted: boolean,
    remainingVotes: number,
    setIsLoading: (e: boolean) => void,
    setIsVoted: (e: boolean) => void,
    setPotentialReward: (e: number) => void,
    setAward: (e: number) => void,
}
