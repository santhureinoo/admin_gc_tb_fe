import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type selectedApplicationsType = {
  selectedApplications: number[];
  isStatusChanged: boolean;
  selectedApplicantUserId: string;
  selectedApplicationDetail: any;
};

const initialState: selectedApplicationsType = {
  selectedApplications: [],
  isStatusChanged: false,
  selectedApplicantUserId: "",
  selectedApplicationDetail: null,
};

export const selectedApplications = createSlice({
  name: "selectedApplications",
  initialState,
  reducers: {
    setSelectedApplicantDetail: (state, action: PayloadAction<string>) => {
      state.selectedApplicationDetail = action.payload;
    },
    setSelectedApplicantUserId: (state, action: PayloadAction<string>) => {
      state.selectedApplicantUserId = action.payload;
    },
    addSingleApplications: (state, action: PayloadAction<number>) => {
      state.selectedApplications = [action.payload];
    },
    addApplications: (state, action: PayloadAction<number>) => {
      state.selectedApplications = [
        ...state.selectedApplications,
        action.payload,
      ];
    },
    // this is for when we click the table header checkbox
    addAllApplications: (state, action: PayloadAction<number[]>) => {
      const allIds = action.payload;
      state.selectedApplications = allIds;
    },
    removeApplications: (state, action: PayloadAction<number>) => {
      const copiedApplications = [...state.selectedApplications];
      const filterdApplications = copiedApplications.filter(
        (el) => el != action.payload
      );
      state.selectedApplications = filterdApplications;
    },
    clearApplications: (state) => {
      state.selectedApplications = [];
      state.isStatusChanged = !state.isStatusChanged;
    },
  },
});

export const {
  addApplications,
  removeApplications,
  clearApplications,
  addAllApplications,
  addSingleApplications,
  setSelectedApplicantUserId,
  setSelectedApplicantDetail,
} = selectedApplications.actions;

export default selectedApplications.reducer;
