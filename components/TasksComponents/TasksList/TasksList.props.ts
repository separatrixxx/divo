import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { TaskItemInterface } from '../../../interfaces/tasks.interface';


export interface TaskListProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    type: 'active' | 'completed',
    list: TaskItemInterface[],
}
