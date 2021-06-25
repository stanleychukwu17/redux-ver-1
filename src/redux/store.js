import { createStore } from "redux";
import {cakeReducer} from "./cakeReducer";

let store = createStore(cakeReducer);
console.log(store);
export default store;