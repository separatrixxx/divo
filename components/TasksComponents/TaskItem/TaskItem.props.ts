import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { TaskMetadataInterface } from '../../../interfaces/tasks.interface';


export interface TaskItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    taskId?: string,
    name: string,
    description: string,
    task_metadata?: TaskMetadataInterface,
    current?: number,
    target?: number,
    isCompleted?: boolean,
}
