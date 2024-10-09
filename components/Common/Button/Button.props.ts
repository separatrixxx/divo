import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface ButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    text: string,
    isActive?: boolean,
    onClick: (e: any) => void,
}
