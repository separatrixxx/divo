import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface ButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    text?: string,
    isCopy?: boolean,
    isActive?: boolean,
    isLoading?: boolean,
    isDisabled?: boolean,
    onClick: (e: any) => void,
}
