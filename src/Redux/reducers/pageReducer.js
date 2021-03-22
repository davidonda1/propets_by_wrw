import {HOME_PAGE} from "../../utils/constants/constants";
import {CHANGE_PAGE} from "../actions/pageActions";

export const initialState = {
    page: HOME_PAGE,
}

export const pageReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_PAGE: {
            return {...state, page: action.payload};
        }
        default:
            return state;
    }
}