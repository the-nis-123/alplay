import { combineReducers } from "redux";
import playerReducer from "./playerReducer";
import searchReducer from "./searchReducer";
import playlistReducer from "./playlistReducer";

const AppRootReducer = combineReducers({
  playerReducer,
  searchReducer,
  playlistReducer
});

export default AppRootReducer;
