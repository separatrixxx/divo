import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { DivositItem } from '../../../interfaces/divosit.interface';


export interface DivositListProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    type: 'active' | 'completed',
    list: DivositItem[] | undefined,
}
