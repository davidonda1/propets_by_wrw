export const CHANGE_PAGE = 'CHANGE_PAGE';

export const change_page = page => {
    return {
        type: CHANGE_PAGE,
        payload: page,
    }
};