import { createSlice } from "@reduxjs/toolkit";

interface ModePage {
  mode: "expanded" | "collapsed";
}

const initialState: ModePage = {
  mode: "expanded",
};

const MenuNavbaSlice = createSlice({
  name: "navba",
  initialState,
  reducers: {
    mode: (state) => {
      state.mode === "expanded"
        ? (state.mode = "collapsed")
        : (state.mode = "expanded");
    },
  },
});
export const { mode } = MenuNavbaSlice.actions;
export default MenuNavbaSlice.reducer;
