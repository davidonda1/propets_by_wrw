import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {accountingReducer} from '../reducers/accountingReducer';

const rootReducer = combineReducers({accountingReducer});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));