import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface TaskItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    name: string,
    tag: string,
    award: number,
    current: number,
    target: number,
    isCompleted?: boolean,
}
