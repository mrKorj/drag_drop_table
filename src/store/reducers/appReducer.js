import {actionTypes} from "../actionTypes";
import {mockData} from "../mockData";

const initialState = {
    users: mockData,
    columns: ['User ID', 'User name', 'Extra hours', 'Manual hours', 'Hours', 'Total hours', 'Options']
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_DATA_FROM_LOCALSTORAGE: {
            return {...state, users: action.payload}
        }
        case actionTypes.DRAG_ROW: {
            return {...state, users: action.payload}
        }
        default:
            return state
    }
}
