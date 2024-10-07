import { createSlice } from '@reduxjs/toolkit'
import { UserInterface } from '../../interfaces/user.interface';


const userData: UserInterface = {
    status: '',
    result: {
        user_id: 0,
        refferal_id: null,
        user_data: {},
        coins: 0,
        total_available_votes: 0,
        remaining_votes: 0,
    }
};

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: userData,
  },
  reducers: {
    setUser: (state, action) => {
        state.user = action.payload
    },
    setUserDefault: (state) => {
        state.user = userData
    },
  },
});

export const { setUser, setUserDefault } = userSlice.actions;

export default userSlice.reducer;
