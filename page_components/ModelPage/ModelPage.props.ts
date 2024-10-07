import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ModelByIdInterface } from '../../interfaces/models.interface';


export interface ModelPageProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    model: ModelByIdInterface,
}
