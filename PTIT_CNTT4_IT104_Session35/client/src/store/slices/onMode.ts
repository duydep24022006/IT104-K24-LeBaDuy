import { createSlice } from "@reduxjs/toolkit";

const onMode = createSlice({
  name: "Mode",
  initialState: {
    mode: true,
  },
  reducers: {
    modeBg: (state) => {
      state.mode = !state.mode;
    },
  },
});
export const { modeBg } = onMode.actions;
export default onMode.reducer;
