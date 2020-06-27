
export enum TaskStatus {
    Running,
    Success,
    Failed,
}

export interface Task {
    id: number;
    type: string;
    objectId: any;
    status: TaskStatus;
    canceled: boolean;
    description?: string;
    timeStart: Date;
    timeStop?: Date;
}


export interface TasksState {
    list: Task[];
}

export const UPDATE_TASK = "UPDATE_TASK";
interface UpdateTaskAction {
    type: typeof UPDATE_TASK;
    task: Task;
}
export function UpdateTask(task: Task): UpdateTaskAction {
    return {
        type: UPDATE_TASK,
        task: task,
    };
}

export type KnownAction = UpdateTaskAction;