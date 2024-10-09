import { createSlice } from '@reduxjs/toolkit'


interface SortState {
    sort: 'all' | 'voted' | 'not_voted';
}

const initialState: SortState = {
    sort: 'all',
};

export const sortSlice = createSlice({
    name: 'sort',
    initialState,
    reducers: {
        toggleSort: (state) => {
            state.sort = state.sort === 'all' ? 'voted' : (state.sort === 'voted' ? 'not_voted' :'all');
        },
    },
});

export const { toggleSort } = sortSlice.actions;

export default sortSlice.reducer;
