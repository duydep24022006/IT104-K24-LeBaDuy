import { combineReducers, createStore } from "redux";
import { counterReducer } from "./reducers/CounterReducer";
import { ProfileReducer } from "./reducers/Profilereducer";
import { ListUserReducer } from "./reducers/ListUserReducer";
import { RandomNumberReducer } from "./reducers/RandomNumberReducer";
import { ChangeStateReducer } from "./reducers/ChangeStateReducer";
import { ThemeModeReducer } from "./reducers/ThemeModeReducer";
import { AuthReducer } from "./reducers/AuthReducer.ts";

const rootReducer = combineReducers({
  counter: counterReducer,
  profile: ProfileReducer,
  listUser: ListUserReducer,
  randomNumber: RandomNumberReducer,
  changeState: ChangeStateReducer,
  themeMode: ThemeModeReducer,
  auth: AuthReducer,
});
export const store = createStore(rootReducer);
