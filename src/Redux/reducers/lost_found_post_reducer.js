import {PUT_IMG} from "../../utils/constants/lost_found_post_constants";

const initialState = {
    images: [],
}

export const lost_found_post_reducer = (state = initialState, action) => {
    switch (action.type){
        case PUT_IMG:
            const images = [...state.images];
            images.push(action.payload);
            return {...state, images}
        default:
            return state;
    }
}