import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';


export interface TaskButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    text: string,
    isLoading?: boolean,
    setIsLoading: (e: boolean) => void,
    onClick: (e: any) => void,
}
