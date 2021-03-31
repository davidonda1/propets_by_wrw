import {
    PUT_IMG,
    PUT_LOADING,
    PUT_LOST,
    PUT_LOST_POSTS,
    PUT_MESSAGE
} from "../../utils/constants/lost_found_post_constants";

const initialState = {
    images: [],
}

export const lost_found_post_reducer = (state = initialState, action) => {
    switch (action.type){
        case PUT_IMG:
            const images = [...state.images];
            images.push(action.payload);
            return {...state, images}
        case PUT_LOST:
            return {...state, petInfo: action.payload};
        case PUT_MESSAGE:
            return {...state, message: action.payload}
        case PUT_LOADING:
            return {...state, loading: action.payload};
        case PUT_LOST_POSTS:
            const posts = action.payload;
            return {...state, posts};
        default:
            return state;
    }
}