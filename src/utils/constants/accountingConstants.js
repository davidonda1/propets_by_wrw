export const BASE_URL = 'https://propets-app.herokuapp.com/account/en/v1/';

export const REGISTER_USER = 'REGISTER_USER';
export const PUT_USER = 'PUT_USER';
export const LOGOUT = 'LOGOUT';
export const PUT_MESSAGE='PUT_MESSAGE';

export const createToken = (login, password) => {
    return `Basic ${btoa(login + ':' + password)}`;
}