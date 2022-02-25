import { combineReducers } from "redux";
import loadComponentReducer from "./loadComponentReducer";
import audioPlayerReducer from "./audioPlayerReducer";
import authenticationReducer from "./authenticationReducer";

const AppRootReducer = combineReducers({
  loadComponentReducer,
  audioPlayerReducer,
  authenticationReducer
});

export default AppRootReducer;
