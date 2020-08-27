import {createReducer} from '@reduxjs/toolkit'
import {SELECT_CARGOS} from "../actionTypes";
import * as _ from "lodash";

//    [{ portCode: string, number: int, type: string}]
const defaultState = {
    selectedCargos: []
};
export const cargoReducer = createReducer(defaultState, {
    [SELECT_CARGOS]: (state, action) => {
        let cargo = action.payload.cargoInfo;
        let selectedCargos = state.selectedCargos;
        for (let i = 0; i < selectedCargos.length; i++) {
            if (selectedCargos[i].type === cargo.type && selectedCargos[i].portCode === cargo.portCode) {
                selectedCargos[i].number = cargo.number;
                return;
            }
        }
        selectedCargos.push(cargo);
        state.selectedCargos = selectedCargos;
        return state
    }
});