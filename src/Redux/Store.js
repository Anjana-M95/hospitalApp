import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { RootReducer } from "./RootReducer";

export const Store = createStore(RootReducer, applyMiddleware(thunk));

