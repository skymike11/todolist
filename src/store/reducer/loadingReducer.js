import {createReducer} from '@reduxjs/toolkit'
import {LOADING} from "../actionTypes";

const defaultState = {
    loading: false
};
export const loadingReducer = createReducer(defaultState, {
    [LOADING]: (state, action) => ({
        loading: action.payload.loading
    })
});