import { createStore, combineReducers } from "redux";
import {cakeReducer, creamReducer } from "./cakeReducer";

let rootReducer = combineReducers({
    'cake':cakeReducer, 'cream':creamReducer
});
let store = createStore(rootReducer);
export default store;