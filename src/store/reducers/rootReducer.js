import {combineReducers, createStore} from "redux";
import {appReducer} from "./appReducer";
import {composeWithDevTools} from "redux-devtools-extension";

export const rootReducer = combineReducers({
    appState: appReducer,
})

export const store = createStore(rootReducer, composeWithDevTools())
