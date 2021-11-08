import {actionTypes} from "./actionTypes";

export const dragRowAction = (data) => {
    return {
        type: actionTypes.DRAG_ROW,
        payload: data
    }
}

export const getDataFromLocalStorageAction = (data) => {
    return {
        type: actionTypes.GET_DATA_FROM_LOCALSTORAGE,
        payload: data
    }
}
