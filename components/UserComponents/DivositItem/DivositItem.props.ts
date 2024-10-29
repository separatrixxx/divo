import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface DivositItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    amount: number,
    dateEnd?: number,
    dailyReward: number,
    totalReward: number
}
