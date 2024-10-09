export interface TasksInterface {
    status: string,
    result: {
        tasks: {
            active: TaskItemInterface[],
            completed: TaskItemInterface[],
        },
        completion_status: {
            completed_tasks: TaskItemInterface[],
            tasks_checked: number,
        }
    }
}

export interface TaskItemInterface {
    id: string,
    name: string,
    description: string,
    tag: string,
    award: number,
    task_start?: string,
    task_end?: string,
    timestamp_complete?: string,
}
