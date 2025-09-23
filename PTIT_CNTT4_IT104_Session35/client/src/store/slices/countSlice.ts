import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    resetCouter: (state) => {
      state.count = 0;
    },
  },
});
export const { increment, decrement, resetCouter } = counterSlice.actions;
export default counterSlice.reducer;
