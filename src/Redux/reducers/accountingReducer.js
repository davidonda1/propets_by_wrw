import {LOGOUT, PUT_ERROR, PUT_MESSAGE, PUT_USER, PUT_X_TOKEN} from "../../utils/constants/accountingConstants";

const initialState = {
    nickName: '',
    user_avatar: '',
    token: '',
    email: '',
    role: 'User',
    status: 'true',
    postId: '',
    xToken: '',
    message: '',
    error: '',
    phone: ''
}
export const accountingReducer = (state = initialState, action) => {
    switch (action.type) {
        case PUT_MESSAGE:
            return {
                ...state,
                message: action.payload
            }
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
        case PUT_X_TOKEN:
            const xToken = action.payload;
            return {...state, xToken};
        case PUT_ERROR:
            return {...state, error: 'error'}
        default:
            return state
    }
}


























