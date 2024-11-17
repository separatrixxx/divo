import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface CoinProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    isSmall?: boolean,
}
