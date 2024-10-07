import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface NavbarButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    type: 'profile' | 'tasks',
    text: string,
    link: string,
}
