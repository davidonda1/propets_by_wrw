import {
    PUT_IMG_POSTS,
    PUT_LOADING_POSTS,
    PUT_LOST_POST,
    PUT_LOST_POSTS,
    PUT_MESSAGE_POSTS
} from "../../utils/constants/lost_found_post_constants";
import {PUT_ERROR} from "../../utils/constants/accountingConstants";

const initialState = {
    images: [],
}

export const lost_found_post_reducer = (state = initialState, action) => {
    switch (action.type){
        case PUT_IMG_POSTS:
            const images = [...state.images];
            images.push(action.payload);
            return {...state, images}
        case PUT_LOST_POST:
            return {...state, petInfo: action.payload};
        case PUT_MESSAGE_POSTS:
            return {...state, message: action.payload}
        case PUT_LOADING_POSTS:
            return {...state, loading: action.payload};
        case PUT_LOST_POSTS:
            const posts = action.payload;
            return {...state, posts};
        default:
            return state;
    }
}