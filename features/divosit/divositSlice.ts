import { createSlice } from '@reduxjs/toolkit'
import { DivositIData } from '../../interfaces/divosit.interface';


const divositData: DivositIData = {
    active: {
        status: '',
        result: {},
    },
    completed: {
        status: '',
        result: {},
    },
};

export const divositSlice = createSlice({
    name: 'divosit',
    initialState: {
        divosit: divositData,
    },
    reducers: {
        setDivositActive: (state, action) => {
            state.divosit.active = action.payload
        },
        setDivositCompleted: (state, action) => {
            state.divosit.completed = action.payload
        },
        setDivositDefault: (state) => {
            state.divosit = divositData
        },
    },
});

export const { setDivositActive, setDivositCompleted, setDivositDefault } = divositSlice.actions;

export default divositSlice.reducer;
