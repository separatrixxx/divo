import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface NavbarButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLLinkElement>, HTMLLinkElement> {
    type: 'main' | 'collection' | 'friends' | 'tasks',
    text: string,
    link: string,
}
