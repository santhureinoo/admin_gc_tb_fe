import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type selectedApplicationsType = {
  selectedApplications: number[];
};

const initialState: selectedApplicationsType = {
  selectedApplications: [],
};

export const selectedApplications = createSlice({
  name: "selectedApplications",
  initialState,
  reducers: {
    addApplications: (state, action: PayloadAction<number>) => {
      state.selectedApplications = [
        ...state.selectedApplications,
        action.payload,
      ];
    },
    removeApplications: (state, action: PayloadAction<number>) => {
      const copiedApplications = [...state.selectedApplications];
      const filterdApplications = copiedApplications.filter(
        (el) => el != action.payload
      );
      state.selectedApplications = filterdApplications;
    },
    clearApplications: (state, action: PayloadAction<number>) => {
      state.selectedApplications = [];
    },
  },
});

export const { addApplications, removeApplications, clearApplications } =
  selectedApplications.actions;

export default selectedApplications.reducer;
