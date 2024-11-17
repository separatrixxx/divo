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
    legacy_refferal_votes: 0,
    votes_for_ref: 0,
    votes_for_task: 0,
    invited_friends_count: 0,
    money_friends: 0,
    register_date: '',
    last_vote_datetime: '',
    last_signed: '',
    blocked_in_stake: 0,
    daily_stake_income: 0,
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
