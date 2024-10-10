import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface CoinsInfoItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    event_by: string,
    timestamp: string,
    coins_amount: number,
}
