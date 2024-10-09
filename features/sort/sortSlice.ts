import { createSlice } from '@reduxjs/toolkit'
import { Sort } from '../../interfaces/models.interface';


interface SortState {
    sort: Sort;
}

const initialState: SortState = {
    sort: 'random',
};

export const sortSlice = createSlice({
    name: 'sort',
    initialState,
    reducers: {
        toggleSort: (state) => {
            state.sort = state.sort === 'random' ? 'popularity' : 'random';
        },
    },
});

export const { toggleSort } = sortSlice.actions;

export default sortSlice.reducer;
