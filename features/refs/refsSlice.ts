import { createSlice } from '@reduxjs/toolkit'
import { RefsInterface } from '../../interfaces/user.interface';


const refsData: RefsInterface = {
  status: '',
  result: {
    referral_info: {
        referral_count: 0,
        referrals_total_coins: 0,
        user_coins: 0,
    },
    referral_link: '',
  }
};

export const refsSlice = createSlice({
  name: 'refs',
  initialState: {
    refs: refsData,
  },
  reducers: {
    setRefs: (state, action) => {
      state.refs = action.payload
    },
    setRefsDefault: (state) => {
      state.refs = refsData
    },
  },
});

export const { setRefs, setRefsDefault } = refsSlice.actions;

export default refsSlice.reducer;
