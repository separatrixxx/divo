import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';


export interface TaskButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    text: string,
    isLoading?: boolean,
    isCompleted?: boolean,
    onClick?: (e: any) => void,
}
