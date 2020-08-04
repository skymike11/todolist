import {ADD_ITEM, DELETE_ITEM} from "./actionTypes";

const defaultState = {
    itemList: []
};
export default (state = defaultState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return {
                itemList: [...state.itemList, action.inputValue]
            };
        case DELETE_ITEM:
            defaultState.itemList.remove(action.index);
            return defaultState;
        default:
            return defaultState;
    }
}
