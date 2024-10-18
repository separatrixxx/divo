import { createSlice } from '@reduxjs/toolkit'
import { UserInterface } from '../../interfaces/user.interface';


const userData: UserInterface = {
  status: '',
  result: {
    user_id: 0,
    user_status: 'user',
    refferal_id: null,
    user_data: {},
    coins: 0,
    total_available_votes: 0,
    remaining_votes: 0,
    potential_reward: 0,
    votes_for_ref: 0,
    votes_for_task: 0,
    register_date: '',
    last_vote_datetime: '',
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
