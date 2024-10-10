import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';


export interface ProgressBarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    current: number,
    target: number,
}
