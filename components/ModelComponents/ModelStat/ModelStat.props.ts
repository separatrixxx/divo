import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface ModelStatProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    type: 'eye' | 'burn' | 'coin' | 'refs',
    stat: number | string,
}
