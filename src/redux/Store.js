import { createStore } from "redux";
import { applyMiddleware } from "redux";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { LoginReducer } from "./LoginReducer";

const rootReducer = combineReducers({
  Login: LoginReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));
export { store };
