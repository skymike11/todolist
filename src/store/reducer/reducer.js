import {ADD_ITEM, DELETE_ITEM, FETCH_ITEM, FINISH_ITEM} from "../actionTypes";


const defaultState = {
    itemList: []
};
export default (state = defaultState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return {
                itemList: [...state.itemList, action.item]
            };
        case DELETE_ITEM:
            return {
                itemList: state.itemList.filter((value, index) => {
                    return index !== action.index
                })
            };
        case FINISH_ITEM:
            for (let i = 0; i < state.itemList.length; i++) {
                if (i === action.index) {
                    state.itemList[i].isDone = !state.itemList[i].isDone
                }
            }
            return {
                itemList: [...state.itemList]
            };
        case FETCH_ITEM:
            let result =  {
                itemList: action.itemList
            };
            console.log('result', result);
            return result;
        default:
            return defaultState;
    }
}

