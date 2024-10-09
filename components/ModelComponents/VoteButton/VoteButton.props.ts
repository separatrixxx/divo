import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';


export interface VoteButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    modelId: string,
    isLoading?: boolean,
    isVoted: boolean,
    setIsLoading: (e: boolean) => void,
    setIsVoted: (e: boolean) => void,
}
