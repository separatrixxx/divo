import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface ModelPhotoProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    id: string,
    photo: string,
}
