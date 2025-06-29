import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "task",
  initialState: {},
  reducers: {
    addTask: (state, action) => {
      console.log(state, action);
    },
  },
});

export const taskReducer = taskSlice.reducer;
export const { addTask } = taskSlice.actions;
