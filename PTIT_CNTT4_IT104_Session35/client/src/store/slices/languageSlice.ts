import { createSlice } from "@reduxjs/toolkit";

interface LanguageState {
  language: "en" | "vi";
}

const initialState: LanguageState = {
  language: "en",
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    switchLanguage: (state, action) => {
      state.language = action.payload; 
    },
  },
});

export const { switchLanguage } = languageSlice.actions;
export default languageSlice.reducer;
