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

export const loginUser = (email, password) => {
    return dispatch => {
        const token = createToken(email, password);
        fetch(`${BASE_URL}login`, {
            method: 'POST',
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
            })
            .catch(error => alert('Error'))
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
