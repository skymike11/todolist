import {combineReducers, createStore} from "redux";
import reducer from "./reducer/reducer";
import {loadingReducer} from "./reducer/loadingReducer";

export default createStore(combineReducers({reducer, loadingReducer}));

