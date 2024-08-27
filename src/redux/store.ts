import { configureStore } from "@reduxjs/toolkit";

import { useSelector, TypedUseSelectorHook } from "react-redux";
import userAuthSlice from "./userAuthSlice";

export const store = configureStore({
  reducer: {
    auth: userAuthSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
