import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import userSlice from "../user/userSlice";
import modelsSlice from "../models/modelsSlice";
import sortSlice from "../sort/sortSlice";
import leaderboardSlice from "../leaderboard/leaderboardSlice";
import refsSlice from "../refs/refsSlice";
import coinsInfoSlice from "../coinsInfo/coinsInfoSlice";
import tasksSlice from "../tasks/tasksSlice";
import divositSlice from "../divosit/divositSlice";
import firstVisitSlice from "../firstVisit/firstVisitSlice";


const makeStore = () =>
  configureStore({
    reducer: {
      user: userSlice,
      models: modelsSlice,
      sort: sortSlice,
      leaderboard: leaderboardSlice,
      refs: refsSlice,
      coinsInfo: coinsInfoSlice,
      tasks: tasksSlice,
      divosit: divositSlice,
      firstVisit: firstVisitSlice,
    },
    devTools: true,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);