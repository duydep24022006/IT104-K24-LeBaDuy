import { createSlice } from "@reduxjs/toolkit";

interface RandomState {
  numberList: number[];
}

const initialState: RandomState = {
  numberList: [],
};

const rundomSlice = createSlice({
  name: "numberList",
  initialState,
  reducers: {
    rundomNumber: (state) => {
          state.numberList.push(Math.floor(Math.random() * 100));
          console.log(1111,state);
          
    },
  },
});
export const { rundomNumber } = rundomSlice.actions;
export default rundomSlice.reducer;

