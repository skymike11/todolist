import {ADD_ITEM, DELETE_ITEM} from "./actionTypes";

const defaultState = {
    itemList: []
};
export default (state = defaultState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            defaultState.itemList.push(action.value);
            return defaultState;
        case DELETE_ITEM:
            defaultState.itemList.remove(action.index);
            return defaultState;
        default:
            return defaultState;
    }
}
