import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type LicenseIds = {
  ids : number[],
  companies: any[],
  totalCompanyCount: number,
};

const initialState: LicenseIds = {
  ids: [],
  companies: [],
  totalCompanyCount: 0
};

export const license = createSlice({
  name: "license",
  initialState,
  reducers: {
    addIds : (state, action: PayloadAction<number[]>) => {
      state.ids = action.payload;
    },
    removeAllIds: (state) => {
      state.ids = [];
    },
    removeId: (state, action: PayloadAction<number>) => {
      state.ids = state.ids.filter((id) => id !== action.payload);
    },
    setCompanies: (state, action: PayloadAction<any[]>) => {
      console.log("this is redux companies", action)
      state.companies = action.payload;
    },
    setTotalCompanyCount:   (state, action: PayloadAction<number>) => {
      state.totalCompanyCount = action.payload;
    }
  },
});

export const { addIds, removeAllIds, removeId, setCompanies, setTotalCompanyCount } = license.actions;
export default license.reducer;
