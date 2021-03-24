import {LOGOUT, PUT_USER} from "../../utils/constants/accountingConstants";


const initialState = {
    nickName: '',
    user_avatar: '',
    token: '',
    email:''
}

export const accountingReducer = (state = initialState, action) => {
    switch (action.type) {
        case PUT_USER:
            return {
               nickName: action.payload.user.name,
                user_avatar: action.payload.user.avatar,
                token: action.payload.token,
                email:action.payload.email
            }
        case LOGOUT:
            localStorage.removeItem('token');
            return {}
        default:
            return state
    }
}