import { createSlice } from "@reduxjs/toolkit";

type UserList = {
  hasNewData: boolean;
};

const initialState: UserList = {
  hasNewData: false,
};

export const userList = createSlice({
  name: "auth",
  initialState,
  reducers: {
    toggleHasNewData: (state) => {
      state.hasNewData = !state.hasNewData;
    },
  },
});

export const { toggleHasNewData } = userList.actions;
export default userList.reducer;
