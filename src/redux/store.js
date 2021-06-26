import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from 'redux-logger';
import {cakeReducer, creamReducer } from "./cakeReducer";

let rootReducer = combineReducers({
    'cake':cakeReducer, 'cream':creamReducer
});
let store = createStore(rootReducer, applyMiddleware(logger));
export default store;