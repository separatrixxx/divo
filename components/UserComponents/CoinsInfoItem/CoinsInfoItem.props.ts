import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface CoinsInfoItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    timestamp: string,
    coins_amount: number,
}
