import type { RootState } from "@/redux/store";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";

export interface ITask {
  id: string;
  title: string;
  description: string;
  status: "pending" | "completed";
  dueDate: string;
  completed: boolean;
  priority: "high" | "medium" | "low";
  assignedTo: string | null; // Optional field for user assignment
}

export type IFilter = "high" | "medium" | "low" | "all";

interface InitialState {
  task: ITask[];
  filter: IFilter;
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
      assignedTo: "akjhdfafdj",
    },
    {
      id: "2",
      title: "Build a Todo App",
      description: "Create a simple Todo application using Redux Toolkit for state management.",
      status: "completed",
      dueDate: "2023-10-15",
      completed: true,
      priority: "medium",
      assignedTo: "lkjdfalkjfdlkjfds",
    },
  ],
  filter: "all",
};

type draftTask = Pick<ITask, "title" | "description" | "dueDate" | "priority" | "assignedTo">;

const createTask = (task: draftTask): ITask => {
  return {
    id: nanoid(),
    title: task.title,
    description: task.description,
    status: "pending",
    dueDate: task.dueDate,
    completed: false,
    priority: task.priority,
    assignedTo: task.assignedTo,
  };
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<draftTask>) => {
      const newTask = createTask(action.payload);
      state.task.push(newTask);
    },
    editTask: (state, action: PayloadAction<{ id: string } & Partial<ITask>>) => {
      const { id, ...updatedTask } = action.payload;
      const index = state.task.findIndex((task) => task.id === id);
      if (index !== -1) {
        state.task[index] = { ...state.task[index], ...updatedTask };
      }
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.task = state.task.filter((task) => task.id !== id);
    },
    toggleComplete: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const task = state.task.find((t) => t.id === id);
      if (task) {
        task.completed = !task.completed;
        task.status = task.completed ? "completed" : "pending";
      }
    },
    updateFilter: (state, action: PayloadAction<IFilter>) => {
      state.filter = action.payload;
    },
  },
});

export const taskReducer = taskSlice.reducer;
export const { addTask, editTask, deleteTask, toggleComplete, updateFilter } = taskSlice.actions;
export const selectTasks = (state: RootState) => {
  const filter = state.tasks.filter;
  switch (filter) {
    case "all":
      return state.tasks.task;
    case "high":
      return state.tasks.task.filter((task) => task.priority === "high");
    case "medium":
      return state.tasks.task.filter((task) => task.priority === "medium");
    case "low":
      return state.tasks.task.filter((task) => task.priority === "low");
    default:
      return state.tasks.task;
  }
};
export const selectFilter = (state: RootState) => state.tasks.filter;
