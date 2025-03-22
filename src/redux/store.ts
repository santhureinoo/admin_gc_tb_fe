import { configureStore } from "@reduxjs/toolkit";

import { useSelector, TypedUseSelectorHook } from "react-redux";
import userAuthSlice from "./userAuthSlice";
import licenseSlice from './licenseSlice'
import selectedApplicationsSlice from "./selectedApplicationsSlice";
import alertSlice from "./alertSlice";

export const store = configureStore({
  reducer: {
    auth: userAuthSlice,
    license: licenseSlice,
    selectedApplications: selectedApplicationsSlice,
    alertSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
