import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  task: {
    id: "1",
    title: "Title of the task",
    description: "Description of the task",
    status: "pending", // or "completed"
    dueDate: "2023-10-01",
    completed: false,
    priority: "high", // or "medium", "low"
  },
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      console.log(state, action);
    },
  },
});

export const taskReducer = taskSlice.reducer;
export const { addTask } = taskSlice.actions;
