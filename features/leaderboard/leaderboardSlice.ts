import { createSlice } from '@reduxjs/toolkit'
import { LeaderboardInterface } from '../../interfaces/leaderboard.interface';


const leaderboardData: LeaderboardInterface = {
    status: '',
    result: {
        top_20: [],
    }
};

export const leaderboardSlice = createSlice({
    name: 'leaderboard',
    initialState: {
        leaderboard: leaderboardData,
    },
    reducers: {
        setLeaderboard: (state, action) => {
            state.leaderboard = action.payload
        },
        setLeaderboardDefault: (state) => {
            state.leaderboard = leaderboardData
        },
    },
});

export const { setLeaderboard, setLeaderboardDefault } = leaderboardSlice.actions;

export default leaderboardSlice.reducer;
