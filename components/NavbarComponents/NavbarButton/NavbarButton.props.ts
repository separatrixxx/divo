import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface NavbarButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLLinkElement>, HTMLLinkElement> {
    type: 'main' | 'collection' | 'friends' | 'tasks' | 'profile',
    text: string,
    link: string,
}
