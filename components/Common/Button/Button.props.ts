import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface ButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    text?: string,
    isCopy?: boolean,
    isActive?: boolean,
    isLoading?: boolean,
    isDisabled?: boolean,
    isPopup?: boolean,
    onClick: (e: any) => void,
}
