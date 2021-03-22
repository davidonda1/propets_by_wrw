import {applyMiddleware, combineReducers, createStore} from "redux";
import {pageReducer} from '../reducers/pageReducer'
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({pageReducer})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));