import { createSlice } from '@reduxjs/toolkit'


export const clickerSlice = createSlice({
    name: 'clicker',
    initialState: {
        clicker: 0,
    },
    reducers: {
        increaseClicker: (state) => {
            state.clicker += 1;
        },
        setClickerDefault: (state) => {
            state.clicker = 0;
        },
    },
});

export const { increaseClicker, setClickerDefault } = clickerSlice.actions;

export default clickerSlice.reducer;
