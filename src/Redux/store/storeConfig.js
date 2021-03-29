import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {accountingReducer} from '../reducers/accountingReducer';
import {lostFoundReducer} from "../reducers/lostFoundReducer";

const rootReducer = combineReducers({accountingReducer,lostFoundReducer});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));