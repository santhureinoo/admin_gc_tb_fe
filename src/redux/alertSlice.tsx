import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AlertState {
  alertType: "success" | "error" | "info" | "warning" | null;
  alertMessage: string;
}

const initialState: AlertState = {
  alertType: null,
  alertMessage: "",
};

const alertSlice = createSlice({
  name: "alert",
  initialState: initialState,
  reducers: {
    setAlert: (
      state,
      action: PayloadAction<{
        alertType: AlertState["alertType"];
        alertMessage: string;
      }>
    ) => {
      state.alertType = action.payload.alertType;
      state.alertMessage = action.payload.alertMessage;
    },
    clearAlert: (state) => {
      state.alertType = null;
      state.alertMessage = "";
    },
  },
});

export const { setAlert, clearAlert } = alertSlice.actions;
export default alertSlice.reducer;
