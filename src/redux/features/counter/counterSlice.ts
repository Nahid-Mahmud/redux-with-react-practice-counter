import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: (state, payload) => {
      state.count += payload.payload || 1;
    },
    decrement: (state, payload) => {
      state.count -= payload.payload || 1;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
