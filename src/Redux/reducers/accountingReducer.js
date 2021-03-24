import {LOGOUT, PUT_USER} from "../../utils/constants/accountingConstants";

const initialState = {
    nickName: '',
    user_avatar: '',
    token: '',
    email: '',
    role: 'User',
    status: 'true',
    postId: '',
    xToken: '',
}
export const accountingReducer = (state = initialState, action) => {
    switch (action.type) {
        case PUT_USER:
            return {
                ...state,
                nickName: action.payload.user.name,
                user_avatar: action.payload.user.avatar,
                token: action.payload.token,
                email: action.payload.user.email,
            }
        case LOGOUT:
            localStorage.removeItem('token');
            return {}
        case 'PUT_X_TOKEN':
            const xToken = action.payload;
            return {...state, xToken};
        default:
            return state
    }
}


























