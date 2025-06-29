import { createSlice } from "@reduxjs/toolkit";

export interface ITask {
  id: string;
  title: string;
  description: string;
  status: "pending" | "completed";
  dueDate: string;
  completed: boolean;
  priority: "high" | "medium" | "low";
}

interface InitialState {
  task: ITask[];
}

const initialState: InitialState = {
  task: [
    {
      id: "1",
      title: "Learn Redux Toolkit",
      description: "Understand the basics of Redux Toolkit and how to use it in React applications.",
      status: "pending",
      dueDate: "2023-10-31",
      completed: false,
      priority: "high",
    },
    {
      id: "2",
      title: "Build a Todo App",
      description: "Create a simple Todo application using Redux Toolkit for state management.",
      status: "completed",
      dueDate: "2023-10-15",
      completed: true,
      priority: "medium",
    },
  ],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newTask: ITask = {
        id: new Date().toISOString(),
        ...action.payload,
        completed: false,
      };
      state.task.push(newTask);
    },
    editTask: (state, action) => {
      const { id, ...updatedTask } = action.payload;
      const index = state.task.findIndex((task) => task.id === id);
      if (index !== -1) {
        state.task[index] = { ...state.task[index], ...updatedTask };
      }
    },
    deleteTask: (state, action) => {
      const id = action.payload;
      state.task = state.task.filter((task) => task.id !== id);
    },
  },
});

export const taskReducer = taskSlice.reducer;
export const { addTask, editTask, deleteTask } = taskSlice.actions;
