import { createSlice } from '@reduxjs/toolkit'
import { TasksInterface } from '../../interfaces/tasks.interface';


const tasksData: TasksInterface = {
    status: '',
    result: {
        tasks: {
            active: [],
            completed: [],
        },
        completion_status: [],
    }
};

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: tasksData,
    },
    reducers: {
        setTasks: (state, action) => {
            state.tasks = action.payload
        },
        setTasksDefault: (state) => {
            state.tasks = tasksData
        },
    },
});

export const { setTasks, setTasksDefault } = tasksSlice.actions;

export default tasksSlice.reducer;
