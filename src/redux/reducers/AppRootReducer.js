import { combineReducers } from "redux";
import loadComponentReducer from "./loadComponentReducer";
import audioPlayerReducer from "./audioPlayerReducer";
import authenticationReducer from "./authenticationReducer";
import searchReducer from "./searchReducer";
import playlistReducer from "./playlistReducer";

const AppRootReducer = combineReducers({
  loadComponentReducer,
  audioPlayerReducer,
  authenticationReducer,
  searchReducer,
  playlistReducer
});

export default AppRootReducer;
