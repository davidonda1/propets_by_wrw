import {
    BASE_URL_FOUND,
    BASE_URL_FOUND_POSTS,
    BASE_URL_LOST, BASE_URL_LOST_POSTS, PUT_FOUND_OR_LOST, PUT_FOUND_POSTS,
    PUT_IMG_POSTS,
    PUT_LOADING_POSTS,
    PUT_LOST_POST, PUT_LOST_POSTS,
    PUT_MESSAGE_POSTS
} from "../../utils/constants/lost_found_post_constants";

export const putLost = petInfo => ({
    type: PUT_LOST_POST,
    payload: petInfo
})

export const putImg = url => ({
    type: PUT_IMG_POSTS,
    payload: url,
})


export const putMessage = message => ({
    type: PUT_MESSAGE_POSTS,
    payload: message,
})

export const putLoading = () => ({
    type: PUT_LOADING_POSTS,
    payload: 'done',
})

export const putLostPosts = posts => ({
    type: PUT_LOST_POSTS,
    payload: posts
})

export const putFoundPosts = posts => ({
    type: PUT_FOUND_POSTS,
    payload: posts
})

export const putFoundOrLost=foundOrLost=>({
    type: PUT_FOUND_OR_LOST,
    payload:foundOrLost
})


/*export const lostPost = (info) => {
    return (dispatch, getState) => {

        const xToken = getState().accountingReducer.xToken;
        const login = getState().accountingReducer.email;
        const userName = getState().accountingReducer.nickName;
        const avatar = getState().accountingReducer.user_avatar;
        const photos = getState().lost_found_post_reducer.images;
        const data = {
            userName: userName,
            avatar: avatar,
            type: info.type,
            sex: info.sex,
            breed: info.breed,
            address: {
                country: info.address.country,
                city: info.address.city,
                street: info.address.street,
                building: info.address.building
            },
            location: {
                latitude: info.location.latitude,
                longitude: info.location.longitude
            },
            photos: photos,
            tags: info.tags
        };
        fetch(`${BASE_URL_LOST}${login}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Token': xToken,
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                dispatch(putLoading());
            })
    }
}*/

export const lostOrFoundPost = (info, statement) => {
    let baseUrl = statement ? BASE_URL_LOST : BASE_URL_FOUND;
    return (dispatch, getState) => {
        const xToken = getState().accountingReducer.xToken;
        const login = getState().accountingReducer.email;
        const userName = getState().accountingReducer.nickName;
        const avatar = getState().accountingReducer.user_avatar;
        const photos = getState().lost_found_post_reducer.images;

        const data = {
            userName: userName,
            avatar: avatar,
            type: info.type,
            sex: info.sex,
            breed: info.breed,
            address: {
                country: info.address.country,
                city: info.address.city,
                street: info.address.street,
                building: info.address.building
            },
            location: {
                latitude: info.location.latitude,
                longitude: info.location.longitude
            },
            photos: photos,
            tags: info.tags
        };

        fetch(`${baseUrl}${login}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Token': xToken,
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                dispatch(putLoading());
            })
    }
}
export const getImg = image => {
    return (dispatch) => {
        dispatch(putMessage('Loading'));
        fetch(`https://api.imgur.com/3/image`, {
            method: 'POST',
            headers: {
                Authorization: 'Client-ID 665e0314354fc47',
            },
            body: image
        }).then(response => {
            if (response.ok) {
                console.log('Image uploaded to album');
                return response.json();
            }
        })
            .then(json => {
                dispatch(putImg(json.data.link));
                dispatch(putMessage(''));
            })
            .catch(error => {
                dispatch(putMessage('Error'))
                console.error(error);
            });
    }
}

export const getLostPosts = () => {
    return (dispatch, getState) => {
        const xToken = getState().accountingReducer.xToken;

        fetch(`${BASE_URL_LOST_POSTS}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-Token': xToken
            }
        })
            .then(response => response.json())
            .then(data => dispatch(putLostPosts(data.posts)))
    }
}

export const getFoundPosts = () => {
    return (dispatch, getState) => {
        const xToken = getState().accountingReducer.xToken;

        fetch(`${BASE_URL_FOUND_POSTS}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-Token': xToken
            }
        })
            .then(response => response.json())
            .then(data => dispatch(putFoundPosts(data.posts)))
    }
}