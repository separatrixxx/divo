import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ModelByIdItem } from '../../../interfaces/models.interface';


export interface ModelInfoProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    status: string,
    modelInfo: ModelByIdItem,
}
