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
                    return response.json();
                } else {
                    throw new Error(response.status)
                }
            })
            .then(user => {
                dispatch(put_user(user, token));
                localStorage.setItem('token', token);
                console.log(user);
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
        const login = getState().email;
        const token = getState().token;
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
export const editUser = (name,avatar, phone) => {
    return (dispatch, getState) => {
        const login = getState().email;
        const token = getState().token;
        fetch(`${BASE_URL}1${login}`, {
            method: 'Put',
            headers: {
                'Content-Type': 'application/json',
                'X-Token': token
            },
            body: JSON.stringify({
                name: name,
                avatar: avatar,
                phone: phone
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
export const addUserRole = (role) => {
    return (dispatch, getState) => {
        const login = getState().email;
        const token = getState().token;
        //FIXME
        fetch(`${BASE_URL}${login}/role/User`, {
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

export const delUserRole=()=>{

}
