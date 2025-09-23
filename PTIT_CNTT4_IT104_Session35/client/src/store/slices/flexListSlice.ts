import { createSlice } from "@reduxjs/toolkit";

interface ModePage {
  mode: "listMode" | "gridMode";
}

const initialState: ModePage = {
  mode: "listMode",
};

const flexListSlice = createSlice({
  name: "flexList",
  initialState,
  reducers: {
    mode: (state) => {      
      state.mode === "listMode"
        ? (state.mode = "gridMode")
        : (state.mode = "listMode");
    },
  },
});
export const { mode } = flexListSlice.actions;
export default flexListSlice.reducer;
