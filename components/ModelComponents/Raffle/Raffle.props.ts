import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface RaffleProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    target: number | undefined,
    potentionalReward: number[] | undefined,
    isVisible: boolean,
    setIsVisible: (e: boolean) => void,
}
