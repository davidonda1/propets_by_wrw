import {BASE_URL, createToken, LOGOUT, PUT_USER} from "../../utils/constants/accountingConstants";

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
        type: 'PUT_X_TOKEN',
        payload: xToken,
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
                if (response.ok) {
                    dispatch(putXToken(response.headers.get('X-Token')));
                    return response.json();
                } else {
                    throw new Error(response.status)
                }
            })
            .then(user => {
                dispatch(put_user(user, token));
                localStorage.setItem('token', token);
            })
            .catch(error => console.log('Error'))
    }
}


export const registerUser = (name, email, password) => {
    return dispatch => {
        const token = createToken(email, password);
        fetch(`${BASE_URL}registration`, {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password
            })
        })
            .then(response => response.json())
            .then(user => dispatch(put_user(user, token)))
    }


}


export const userInfo = () => {

    return (dispatch, getState) => {
        const login = getState().accountingReducer.email;
        const token = getState().accountingReducer.token;
        fetch(`${BASE_URL}${login}/info`, {
            method: 'Get',
            headers: {
                'X-Token': token
            },

        })
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error(response.statusText)
                }
            })
            .then(data => console.log(data))
            .catch(e => alert(e.status))
    }
}
export const editUser = (name, avatar, phone) => {
    return (dispatch, getState) => {
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
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error(response.statusText)
                }
            })
            .then(user => dispatch(put_user(user, token)))
            .catch(e => alert(e.status))
    }
}

export const deleteUser = () => {
    return (dispatch, getState) => {
        const login = getState().email;
        const token = getState().token;
        fetch(`${BASE_URL}${login}`, {
            method: 'Del',
            headers: {
                'Content-Type': 'application/json',
                'X-Token': token
            }
        })
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error(response.statusText)
                }
            })
            .then(data => console.log(data))
            .catch(e => alert(e))
    }
}
//FIXME
export const addUserRole = () => {
    return (dispatch, getState) => {
        const login = getState().email;
        const token = getState().token;
        const role = getState().role;
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
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error(response.statusText)
                }
            })
            .then(data => console.log(data))
            .catch(e => alert(e))
    }
}
//FIXME
export const delUserRole = () => {
    return (dispatch, getState) => {
        const login = getState().email;
        const token = getState().token;
        const role = getState().role;
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
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error(response.statusText)
                }
            })
            .then(data => console.log(data))
            .catch(e => alert(e))

    }
}

export const blockUserAccount = () => {
    return (dispatch, getState) => {
        const login = getState().email;
        const token = getState().token;
        const status = getState().status
        fetch(`${BASE_URL}${login}/block/${status}`, {
            method: 'Put',
            headers: {
                'Content-Type': 'application/json',
                'X-Token': token

            }
        })
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error(response.statusText)
                }
            })
            .then(data => console.log(data))
            .catch(e => alert(e))

    }
}

export const addUserFavorite = () => {
    return (dispatch, getState) => {
        const login = getState().email;
        const token = getState().token;
        const postId = getState().postId
    }
}