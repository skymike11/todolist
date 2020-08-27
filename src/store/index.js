import {combineReducers, createStore} from "redux";
import reducer from "./reducer/reducer";
import {loadingReducer} from "./reducer/loadingReducer";
import {cargoReducer} from "./reducer/cargoReducer";

export default createStore(combineReducers({reducer, loadingReducer, cargoReducer}));

