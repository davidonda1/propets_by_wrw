import {BASE_URL_LOST, PUT_IMG, PUT_LOST} from "../../utils/constants/lost_found_post_constants";

export const putLost = () => ({
    type: PUT_LOST,
    payload: ''
})

export const putImg = url => ({
    type: PUT_IMG,
    payload: url,
})


export const lostPost = (info) => {
    return (dispatch, getState) => {

        const xToken = getState().accountingReducer.xToken;
        const login = getState().accountingReducer.email;
        const userName = getState().accountingReducer.nickName;
        const avatar = getState().accountingReducer.user_avatar;

        fetch(`${BASE_URL_LOST}${login}`, {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json',
                'X-Token': xToken
            },
            body: JSON.stringify({
                userName: userName,
                avatar: avatar,
                type: info.type,
                sex: info.sex,
                breed: info.breed,
                address: {
                    country: info.location.country,
                    city: info.location.city,
                    street: info.location.street,
                    building: info.location.building,
                },
                location: {
                    latitude: info.location.latitude,
                    longitude: info.location.longitude
                },
                photos: info.photos,
                tags: info.tags
            })
        })
            .then(response => response.json())
            .then(data => console.log(data))
    }
}

export const getImg = image => {
    return (dispatch) => {
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
            })
            .catch(error => {
                console.error(error);
            });
    }
}