import {
    BASE_URL,
    createToken,
    error400, error401, error403,
    LOGOUT,
    PUT_MESSAGE,
    PUT_USER
} from "../../utils/constants/accountingConstants";

export const put_user = (user, token) => {
    return {
        type: PUT_USER,
        payload: {user, token}
    }
};


export const log_out = () => {
    return {
        type: LOGOUT,
    }
}


export const putXToken = xToken => {
    return {
        // fixme
        type: 'PUT_X_TOKEN',
        payload: xToken,
    }
}

export const putMessage = (message) => {
    return {
        type: PUT_MESSAGE,
        payload: message
    }
}

export const putError = (error) => {
    return {
        type: PUT_MESSAGE,
        payload: error
    }
}


export const registerUser = (name, email, password) => {
    return dispatch => {
        const token = createToken(email, password);
        fetch(`${BASE_URL}registration`, {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password
            })
        })
            .then(response => {
                // switch (response.status) {
                //     case 400:
                //         dispatch(putError(error400))
                //         break;
                //     case 401:
                //         dispatch(putError(error401))
                //         break;
                //     case 403:
                //         dispatch(putError(error403))
                //         break;
                //     default:
                //         break;
                // }
                if (response.ok) {
                    dispatch(putXToken(response.headers.get('X-Token')));
                    return response.json();
                } else {
                    dispatch(putError('Go To Administrator'))
                }
            })
            .then(user => {
                dispatch(put_user(user, token));
                localStorage.setItem('token', token);
            })

    }
}


export const loginUser = (token) => {
    return dispatch => {
        fetch(`${BASE_URL}login`, {
            method: 'Post',
            headers: {
                'Authorization': token
            }
        })
            .then(response => {
                // switch (response.status) {
                //     case 400:
                //         dispatch(putError(error400))
                //         break;
                //     case 401:
                //         dispatch(putError(error401))
                //         break;
                //     case 403:
                //         dispatch(putError(error403))
                //         break;
                //     default:
                //         break;
                // }
                if (response.ok) {
                    dispatch(putXToken(response.headers.get('X-Token')));
                    return response.json();
                } else {
                    dispatch(putError('Go To Administrator'))
                }
            })
            .then(user => {
                dispatch(put_user(user, token));
                localStorage.setItem('token', token);
            })

    }
}


export const userInfo = () => {

    return (dispatch, getState) => {
        const login = getState().accountingReducer.email;
        const token = getState().accountingReducer.xToken;
        fetch(`${BASE_URL}${login}/info`, {
            method: 'Get',
            headers: {
                'X-Token': token
            },
        })
            .then(response => {
                switch (response.status) {
                    case 400:
                        dispatch(putError(error400))
                        break;
                    case 401:
                        dispatch(putError(error401))
                        break;
                    case 403:
                        dispatch(putError(error403))
                        break;
                    default:
                        break;
                }
                if (response.ok) {
                    dispatch(putXToken(response.headers.get('X-Token')));//may be
                    return response.json()
                } else {
                    dispatch(putError('Go To Administrator'))
                }
            })
            .then(data => console.log(data))

    }
}


export const editUser = (name, avatar, phone) => {

    return (dispatch, getState) => {
        dispatch(putMessage('Loading...'));
        const login = getState().accountingReducer.email;
        const token = getState().accountingReducer.token;
        const xToken = getState().accountingReducer.xToken;
        fetch(`${BASE_URL}${login}`, {
            method: 'Put',
            headers: {
                'Content-Type': 'application/json',
                'X-Token': xToken
            },
            body: JSON.stringify({
                name: name,
                avatar: avatar,
                phone: phone,
            })
        })
            .then(response => {
                switch (response.status) {
                    case 400:
                        dispatch(putError(error400))
                        break;
                    case 401:
                        dispatch(putError(error401))
                        break;
                    case 403:
                        dispatch(putError(error403))
                        break;
                    default:
                        break;
                }
                if (response.ok) {
                    dispatch(putXToken(response.headers.get('X-Token')));//may be
                    dispatch(putMessage(''));
                    return response.json()

                } else {
                    dispatch(putError('Go To Administrator'))
                }
            })
            .then(user => dispatch(put_user(user, token)))

    }
}


export const deleteUser = () => {
    return (dispatch, getState) => {
        const login = getState().accountingReducer.email;
        const token = getState().accountingReducer.xToken;
        fetch(`${BASE_URL}${login}`, {
            method: 'Del',
            headers: {
                'Content-Type': 'application/json',
                'X-Token': token
            }
        })
            .then(response => {
                switch (response.status) {
                    case 400:
                        dispatch(putError(error400))
                        break;
                    case 401:
                        dispatch(putError(error401))
                        break;
                    case 403:
                        dispatch(putError(error403))
                        break;
                    default:
                        break;
                }
                if (response.ok) {
                    dispatch(putXToken(response.headers.get('X-Token')));//may be
                    return response.json()
                } else {
                    dispatch(putError('Go To Administrator'))
                }
            })
            .then(data => console.log(data))

    }
}

//FIXME
export const addUserRole = () => {
    return (dispatch, getState) => {
        const login = getState().accountingReducer.email;
        const token = getState().accountingReducer.xToken;
        const role = getState().accountingReducer.role;
        //FIXME
        fetch(`${BASE_URL}${login}/role/${role}`, {
            method: 'Put',
            headers: {
                'X-Token': token
            },
            body: JSON.stringify([])
            //body contains this|||||>
            /* [
             "User",
                 "Moderator"
             ]*/
        })
            .then(response => {
                switch (response.status) {
                    case 400:
                        dispatch(putError(error400))
                        break;
                    case 401:
                        dispatch(putError(error401))
                        break;
                    case 403:
                        dispatch(putError(error403))
                        break;
                    default:
                        break;
                }
                if (response.ok) {
                    dispatch(putXToken(response.headers.get('X-Token')));//may be
                    return response.json()
                } else {
                    dispatch(putError('Go To Administrator'))
                }
            })
            .then(data => console.log(data))

    }
}

//FIXME
export const delUserRole = () => {
    return (dispatch, getState) => {
        const login = getState().accountingReducer.email;
        const token = getState().accountingReducer.xToken;
        const role = getState().accountingReducer.role;
        fetch(`${BASE_URL}${login}/role/${role}`, {
            method: 'Del',
            headers: {
                'Authorization': token,
                'X-Token': token
            },
            body: JSON.stringify([])
            //body contains this|||||>
            /* [
             "User",
                 "Moderator"
             ]*/
        })
            .then(response => {
                switch (response.status) {
                    case 400:
                        dispatch(putError(error400))
                        break;
                    case 401:
                        dispatch(putError(error401))
                        break;
                    case 403:
                        dispatch(putError(error403))
                        break;
                    default:
                        break;
                }
                if (response.ok) {
                    dispatch(putXToken(response.headers.get('X-Token')));//may be
                    return response.json()
                } else {
                    dispatch(putError('Go To Administrator'))
                }
            })
            .then(data => console.log(data))

    }
}


export const blockUserAccount = () => {
    return (dispatch, getState) => {
        const login = getState().accountingReducer.email;
        const token = getState().accountingReducer.xToken;
        const status = getState().accountingReducer.status;
        fetch(`${BASE_URL}${login}/block/${status}`, {
            method: 'Put',
            headers: {
                'Content-Type': 'application/json',
                'X-Token': token
            }
        })
            .then(response => {
                switch (response.status) {
                    case 400:
                        dispatch(putError(error400))
                        break;
                    case 401:
                        dispatch(putError(error401))
                        break;
                    case 403:
                        dispatch(putError(error403))
                        break;
                    default:
                        break;
                }
                if (response.ok) {
                    dispatch(putXToken(response.headers.get('X-Token')));//may be
                    return response.json()
                } else {
                    dispatch(putError('Go To Administrator'))
                }
            })
            .then(data => console.log(data))

    }
}

//FIXME
export const addUserFavorite = () => {
    return (dispatch, getState) => {
        const login = getState().accountingReducer.email;
        const token = getState().accountingReducer.xToken;
        const postId = getState().accountingReducer.postId;
        fetch(`${BASE_URL}${login}/favorite/${postId}`, {
            method: 'Put',
            headers: {
                'X-Token': token
            }

        })
            .then(response => {
                switch (response.status) {
                    case 400:
                        dispatch(putError(error400))
                        break;
                    case 401:
                        dispatch(putError(error401))
                        break;
                    case 403:
                        dispatch(putError(error403))
                        break;
                    default:
                        break;
                }
                if (response.ok) {
                    dispatch(putXToken(response.headers.get('X-Token')));//may be
                    return response.json()
                } else {
                    dispatch(putError('Go To Administrator'))
                }
            })
            .then(data => console.log(data))

    }
}

//FIXME
export const addUserActivity = () => {
    return (dispatch, getState) => {
        const login = getState().accountingReducer.email;
        const token = getState().accountingReducer.xToken;
        const postId = getState().accountingReducer.postId;
        fetch(`${BASE_URL}${login}/activity/${postId}`, {
            method: 'Put',
            headers: {
                //FIXME
            }
        })
            .then(response => {
                switch (response.status) {
                    case 400:
                        dispatch(putError(error400))
                        break;
                    case 401:
                        dispatch(putError(error401))
                        break;
                    case 403:
                        dispatch(putError(error403))
                        break;
                    default:
                        break;
                }
                if (response.ok) {
                    return response.json()
                } else {
                    dispatch(putError('Go To Administrator'))
                }
            })
            .then(data => console.log(data))

    }
}


export const delUserFavorite = () => {
    return (dispatch, getState) => {
        const login = getState().accountingReducer.email;
        const postId = getState().accountingReducer.postId;
        const token = getState().accountingReducer.xToken;
        fetch(`${BASE_URL}${login}/favorite/${postId}`, {
            method: 'Del',
            headers: {
                'X-Token': token
            }
        })
            .then(response => {
                switch (response.status) {
                    case 400:
                        dispatch(putError(error400))
                        break;
                    case 401:
                        dispatch(putError(error401))
                        break;
                    case 403:
                        dispatch(putError(error403))
                        break;
                    default:
                        break;
                }
                if (response.ok) {
                    dispatch(putXToken(response.headers.get('X-Token')));//may be
                    return response.json()
                } else {
                    dispatch(putError('Go To Administrator'))
                }
            })
            .then(data => console.log(data))

    }
}


export const delUserActivity = () => {
    return (dispatch, getState) => {
        const login = getState().accountingReducer.email;
        const postId = getState().accountingReducer.postId;
        fetch(`${BASE_URL}${login}/activity/${postId}`, {
            method: 'Del',
            headers: {
                //FiXME
            }
        })
            .then(response => {
                switch (response.status) {
                    case 400:
                        dispatch(putError(error400))
                        break;
                    case 401:
                        dispatch(putError(error401))
                        break;
                    case 403:
                        dispatch(putError(error403))
                        break;
                    default:
                        break;
                }
                if (response.ok) {
                    return response.json()
                } else {
                    dispatch(putError('Go To Administrator'))
                }
            })
            .then(data => console.log(data))

    }
}
//FIXME
export const getUserDataPostActivites = () => {
    return (dispatch, getState) => {
        const login = getState().accountingReducer.email;
        fetch(`${BASE_URL}${login}?dataType=true`, {
            method: 'Get',
        })
            .then(response => {
                switch (response.status) {
                    case 400:
                        dispatch(putError(error400))
                        break;
                    case 401:
                        dispatch(putError(error401))
                        break;
                    case 403:
                        dispatch(putError(error403))
                        break;
                    default:
                        break;
                }
                if (response.ok) {
                    return response.json()
                } else {
                    dispatch(putError('Go To Administrator'))
                }
            })
            .then(data => console.log(data))


    }
}
//FIXME
export const getUserDataPostFavourites = () => {
    return (dispatch, getState) => {
        const login = getState().accountingReducer.email;
        fetch(`${BASE_URL}${login}?dataType=false`, {
            method: 'Get',
        })
            .then(response => {
                switch (response.status) {
                    case 400:
                        dispatch(putError(error400))
                        break;
                    case 401:
                        dispatch(putError(error401))
                        break;
                    case 403:
                        dispatch(putError(error403))
                        break;
                    default:
                        break;
                }
                if (response.ok) {
                    return response.json()
                } else {
                    dispatch(putError('Go To Administrator'))
                }
            })
            .then(data => console.log(data))

    }
}

export const tokenValidation = () => {
    return (dispatch, getState) => {
        const token = getState().accountingReducer.xToken
        fetch(`${BASE_URL}token/validation`, {
            method: 'Get',
            headers: {
                'X-Token': token
            }
        })
            .then(response => {
                switch (response.status) {
                    case 400:
                        dispatch(putError(error400))
                        break;
                    case 401:
                        dispatch(putError(error401))
                        break;
                    case 403:
                        dispatch(putError(error403))
                        break;
                    default:
                        break;
                }
                if (response.ok) {
                    dispatch(putXToken(response.headers.get('X-Token')));//may be
                    return response.json()
                } else {
                    dispatch(putError('Go To Administrator'))
                }
            })
            .then(data => console.log(data))


    }
}
