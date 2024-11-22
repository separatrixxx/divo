import { createSlice } from '@reduxjs/toolkit'
import { ClickerInterface } from '../../interfaces/clicker.interface';


const coinsInfoData: ClickerInterface = {
    clicker: 0,
    clicker2: 0,
};

export const clickerSlice = createSlice({
    name: 'clicker',
    initialState: {
        clicker: coinsInfoData,
    },
    reducers: {
        increaseClicker: (state) => {
            state.clicker.clicker += 1;
            state.clicker.clicker2 += 1;
        },
        setClickerDefault: (state) => {
            state.clicker.clicker = 0;
        },
        setClicker2Default: (state) => {
            state.clicker.clicker2 = -1;
        },
    },
});

export const { increaseClicker, setClickerDefault, setClicker2Default } = clickerSlice.actions;

export default clickerSlice.reducer;
