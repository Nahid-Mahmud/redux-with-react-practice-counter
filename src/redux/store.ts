import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./features/counter/counterSlice";
import { taskReducer } from "./features/task/taskSlice";
import { userReducer } from "./features/user/userSlice";
import { baseApi } from "./api/baseApi";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    tasks: taskReducer,
    users: userReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
