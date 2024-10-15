export interface TasksInterface {
    status: string,
    result: {
        tasks: {
            active: TaskItemInterface[],
            completed: TaskItemInterface[],
        },
        completion_status: TaskItemInterface[]
    }
}

export interface TaskItemInterface {
    id: string,
    name: string,
    description: string,
    tag: string,
    award: number,
    task_day?: number,
    task_metadata?: TaskMetadataInterface,
    task_start?: string,
    task_end?: string,
    timestamp_complete?: string,
    progress: {
        current: number,
        target: number,
    }
}

export interface TaskMetadataInterface {
    task: string,
    require?: number,
    task_url?: string,
    object_id?: number,
    chanel_id?: string,
}

export interface CheckTaskInterface {
    status: string,
    result: {
        tasks_status: {
            status: string,
            message: string,
        }
    }
}
