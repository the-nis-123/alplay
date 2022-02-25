import { combineReducers } from "redux";
import loadComponentReducer from "./loadComponentReducer";
import audioPlayerReducer from "./audioPlayerReducer";
import authenticationReducer from "./authenticationReducer";
import searchReducer from "./searchReducer";

const AppRootReducer = combineReducers({
  loadComponentReducer,
  audioPlayerReducer,
  authenticationReducer,
  searchReducer
});

export default AppRootReducer;
