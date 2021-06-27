import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from 'redux-logger';
import thunk from 'redux-thunk'

import {cakeReducer, creamReducer } from "./cakeReducer";

let rootReducer = combineReducers({
    'cake':cakeReducer, 'cream':creamReducer
});
let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));
export default store;