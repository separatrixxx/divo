import { createSlice } from '@reduxjs/toolkit'


const firstVisitData: boolean = false;

export const firstVisitSlice = createSlice({
    name: 'firstVisit',
    initialState: {
        firstVisit: firstVisitData,
    },
    reducers: {
        toggleFirstVisit: (state) => {
            state.firstVisit = !state.firstVisit;
        },
    },
});

export const { toggleFirstVisit } = firstVisitSlice.actions;

export default firstVisitSlice.reducer;
