import type { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";

interface IUser {
  id: string;
  name: string;
}

interface IInitialState {
  users: IUser[];
}

const initialState: IInitialState = {
  users: [
    {
      id: "1",
      name: "John Doe",
    },
    {
      id: "2",
      name: "Jane Smith",
    },
  ],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: () => {},
  },
});

export const userReducer = userSlice.reducer;
export const { addUser } = userSlice.actions;
export const selectUsers = (state: RootState) => state.users.users;
