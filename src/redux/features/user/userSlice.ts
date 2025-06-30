import { v4 as uuidv4 } from "uuid";
import type { RootState } from "@/redux/store";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface IUser {
  id: string;
  name: string;
}

interface IInitialState {
  users: IUser[];
}

type draftUser = Pick<IUser, "name">;

const createUser = (user: draftUser): IUser => {
  return {
    id: uuidv4(),
    name: user.name,
  };
};

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
    addUser: (state, action: PayloadAction<string>) => {
      const newUser = createUser({ name: action.payload });
      state.users.push(newUser);
    },
    deleteUser: (state, action: PayloadAction<string>) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});

export const userReducer = userSlice.reducer;
export const { addUser, deleteUser } = userSlice.actions;
export const selectUsers = (state: RootState) => state.users.users;
