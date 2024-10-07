import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import userSlice from "../user/userSlice";
import modelsSlice from "../models/modelsSlice";


const makeStore = () =>
  configureStore({
    reducer: {
      user: userSlice,
      models: modelsSlice,
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