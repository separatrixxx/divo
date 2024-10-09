import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface NavbarButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLLinkElement>, HTMLLinkElement> {
    type: 'profile' | 'tasks',
    text: string,
    link: string,
}
