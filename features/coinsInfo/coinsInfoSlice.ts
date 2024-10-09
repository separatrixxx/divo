import { createSlice } from '@reduxjs/toolkit'
import { CoinsInfoInterface } from '../../interfaces/user.interface';


const coinsInfoData: CoinsInfoInterface = {
  status: '',
  result: [],
};

export const coinsInfoSlice = createSlice({
  name: 'coinsInfo',
  initialState: {
    coinsInfo: coinsInfoData,
  },
  reducers: {
    setCoinsInfo: (state, action) => {
      state.coinsInfo = action.payload
    },
    setCoinsInfoDefault: (state) => {
      state.coinsInfo = coinsInfoData
    },
  },
});

export const { setCoinsInfo, setCoinsInfoDefault } = coinsInfoSlice.actions;

export default coinsInfoSlice.reducer;
