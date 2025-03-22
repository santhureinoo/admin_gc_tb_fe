import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type LicenseIds = {
  ids : number[],
};

const initialState: LicenseIds = {
  ids: [],
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
    }
  },
});

export const { addIds, removeAllIds, removeId } = license.actions;
export default license.reducer;
