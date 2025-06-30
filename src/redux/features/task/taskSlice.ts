import type { RootState } from "@/redux/store";
import { createSlice, nanoid } from "@reduxjs/toolkit";

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
  filter: "high" | "medium" | "low" | "all";
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
  filter: "all",
};

type draftTask = Pick<ITask, "title" | "description" | "dueDate" | "priority">;

const createTask = (task: draftTask): ITask => {
  return {
    id: nanoid(),
    title: task.title,
    description: task.description,
    status: "pending",
    dueDate: task.dueDate,
    completed: false,
    priority: task.priority,
  };
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newTask = createTask(action.payload);
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
export const selectTasks = (state: RootState) => state.tasks.task;
export const selectFilter = (state: RootState) => state.tasks.filter;
