import {BASE_URL} from "../../utils/constants/lostFoundConstants";
import {error400, error401, error403, errorDefault, PUT_X_TOKEN} from "../../utils/constants/accountingConstants";
import {putError, putMessage} from "./accountingActions";
import {putImg, putLoading} from "./postActions";
import {BASE_URL_LOST, PUT_IMG, PUT_MESSAGE} from "../../utils/constants/lost_found_post_constants";

export const putXToken = xToken => {
    return {
        // fixme
        type: PUT_X_TOKEN,
        payload: xToken,
    }
}
export const putImage = url => ({
    type: 'PUT_IMG',
    payload: url,
})
export const putMessagee = message => ({
    type: 'PUT_MESSAGEE',
    payload: message,
})

/*export const putError=error=>{
    return{
        type:'PUT_ERROR',
        payload:error
    }
}*/
export const addInfo=info=>{
    return{
        type:'PUT_INFO',
        payload:info
    }
}

export const getImg = image => {
    return (dispatch) => {
        dispatch(putMessagee('Loading'));
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
                dispatch(putImage(json.data.link));
                dispatch(putMessagee(''));
            })
            .catch(error => {
                dispatch(putMessagee('Error'))
                console.error(error);
            });
    }
}

export const newLostPet = (found) => {
    return (dispatch, getState) => {

        const xToken = getState().accountingReducer.xToken;
        const login = getState().accountingReducer.email;
        const userName = getState().accountingReducer.nickName;
        const avatar = getState().accountingReducer.user_avatar;
        const photos = getState().lost_found_post_reducer.images;
        const data = {
            userName: userName,
            avatar: avatar,
            type: found.type,
            sex: found.sex,
            breed: found.breed,
            address: {
                country: found.address.country,
                city: found.address.city,
                street: found.address.street,
                building: found.address.building
            },
            location: {
                latitude: found.location.latitude,
                longitude: found.location.longitude
            },
            photos: photos,
            tags: found.tags
        };
        fetch(`https://propets-app.herokuapp.com/lostfound/en/v1/found/${login}
`, {
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