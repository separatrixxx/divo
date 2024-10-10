import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface ModelsListProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    type: 'all' | 'collection',
}
