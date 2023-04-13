import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import userListReducer from "../reducers";

export const store = createStore (userListReducer,applyMiddleware(thunk)) 