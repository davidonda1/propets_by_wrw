import {LOGOUT, PUT_USER} from "../../utils/constants/accountingConstants";


const initialState = {
    username: '',
    user_avatar: '',
    token: '',
}

export const accountingReducer = (state = initialState, action) => {
    switch (action.type) {
        case PUT_USER:
            return {
                username: action.payload.user.name,
                user_avatar: action.payload.user.avatar,
                token: action.payload.token,
            }
        case LOGOUT:
            localStorage.removeItem('token');
            return {}
        default:
            return state
    }
}