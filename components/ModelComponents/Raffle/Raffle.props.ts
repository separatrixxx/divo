import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface RaffleProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    target: number | undefined,
    default_award: number,
    isVisible: boolean,
    setIsVisible: (e: boolean) => void,
}
