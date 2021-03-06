import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {accountingReducer} from '../reducers/accountingReducer';
import {lost_found_post_reducer} from  '../reducers/lost_found_post_reducer';


const rootReducer = combineReducers({accountingReducer, lost_found_post_reducer});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));