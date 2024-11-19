import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface CoinsRainProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    amount: number,
}
