import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface ModelsItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLLinkElement>, HTMLLinkElement> {
    id: string,
    random_photo: string,
    photo_index: number,
}
