import {BASE_URL} from "../../utils/constants/lostFoundConstants";
import {error400, error401, error403, errorDefault} from "../../utils/constants/accountingConstants";
import {putError, putMessage} from "./accountingActions";
import {putImg} from "./postActions";
import {PUT_IMG, PUT_MESSAGE} from "../../utils/constants/lost_found_post_constants";

export const putXToken = xToken => {
    return {
        // fixme
        type: 'PUT_X_TOKEN',
        payload: xToken,
    }
}
export const putImage = url => ({
    type:' PUT_IMG',
    payload: url,
})
export const putMessagee = message => ({
    type: PUT_MESSAGE,
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
        const login = getState().accountingReducer.email;
        const xToken = getState().accountingReducer.xToken;
        const userName = getState().accountingReducer.nickName;
        const avatar = getState().accountingReducer.avatar;
        fetch(`${BASE_URL}lost/${login}`, {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json',
                'X-Token': xToken
            },
            body: {
                userName:userName,
                avatar: avatar,
                type: found.type,
                sex: found.sex,
                breed: found.breed,
                location: {
                    latitude: found.location.latitude,
                    longitude:found.location.longitude
                },
                address:{
                    country: found.address.country,
                    city: found.address.city,
                    street: found.address.street,
                    building: 10,
                },
                photos:found.photos,
                tags : found.tags
            }
        })
            .then(response=>{
                if (response.status===400){
                    dispatch(putError(error400))
                }else if(response.status===401){
                    dispatch(putError(error401))
                }else if(response.status===403){
                    dispatch(putError(error403))
                }else{
                    dispatch(putError(errorDefault))
                }
                if (response.ok) {

                    dispatch(putMessage('Loading'));
                    return response.text();
                    console.log(response.text());
                }
            })
    }
}