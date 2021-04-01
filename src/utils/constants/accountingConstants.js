export const BASE_URL_ACCOUNT = 'https://propets-app.herokuapp.com/account/en/v1/';

export const PUT_USER = 'PUT_USER';
export const LOGOUT = 'LOGOUT';
export const PUT_MESSAGE = 'PUT_MESSAGE';
export const PUT_ERROR = 'PUT_ERROR';
export const PUT_X_TOKEN = 'PUT_X_TOKEN';

export const createToken = (login, password) => {
    return `Basic ${btoa(login + ':' + password)}`;
}

export const error400 = 'ERROR 400, No rights to request';
export const error401 = 'ERROR 401, DAVIDONDA';
export const error403 = 'ERROR 403, Forbidden';
export const errorDefault = 'ERROR,Go To Administrator';