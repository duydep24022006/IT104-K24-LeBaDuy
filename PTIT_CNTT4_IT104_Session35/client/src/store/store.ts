import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/countSlice.ts";
import rundom from "./slices/rundomSlice.ts";
import OnMode from "./slices/onMode.ts";
import flexList from "./slices/flexListSlice.ts";
import menuNavba from "./slices/MenuNavbaSlice.ts";
import language from "./slices/languageSlice.ts";
import listFavoritesUser from "./slices/listFavoritesUser.ts";



export const store = configureStore({
  reducer: {
    counter: counterReducer,
    rundom: rundom,
    onMode: OnMode,
    flexList: flexList,
    menu: menuNavba,
    language:language,
    listFavoritesUser:listFavoritesUser
  },
});
