import { combineReducers } from "redux";
import { reducerCart } from "./reducerCard";
 export const rootReducer = combineReducers({
  card: reducerCart,
});
