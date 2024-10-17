import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type User = {
  token: string;
  userId: string;
  password: string;
};

const initialState: User = {
  token: "",
  userId: "123123",
  password: "",
};

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: () => {
      return initialState;
    },
    logIn: (state, action: PayloadAction<any>) => {
      state.token = action.payload;
    },
  },
});

export const { logIn, logOut } = auth.actions;
export default auth.reducer;
