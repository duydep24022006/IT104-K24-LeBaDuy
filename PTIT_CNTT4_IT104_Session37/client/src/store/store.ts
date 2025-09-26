import { configureStore } from "@reduxjs/toolkit";
import students from "./slice/studnetSlice";
const store = configureStore({
  reducer: {
    student: students,
  },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
