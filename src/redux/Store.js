import { createStore } from "redux";
import AppRootReducer from "./reducers/AppRootReducer";

const store = createStore(AppRootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;