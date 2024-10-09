import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface ModelOtherPhotosProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    photos: string[],
    setPhoto: (e: string) => void,
}
