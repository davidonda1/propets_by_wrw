import {
    BASE_URL_LOST, BASE_URL_LOST_POSTS,
    PUT_IMG,
    PUT_LOADING,
    PUT_LOST, PUT_LOST_POSTS,
    PUT_MESSAGE
} from "../../utils/constants/lost_found_post_constants";

export const putLost = petInfo => ({
    type: PUT_LOST,
    payload: petInfo
})

export const putImg = url => ({
    type: PUT_IMG,
    payload: url,
})


export const putMessage = message => ({
    type: PUT_MESSAGE,
    payload: message,
})

export const putLoading = () => ({
    type: PUT_LOADING,
    payload: 'done',
})

export const putLostPosts = posts => ({
    type: PUT_LOST_POSTS,
    payload: posts
})


export const lostPost = (info) => {
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
            method: 'Post',
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

export const getPosts = () => {
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