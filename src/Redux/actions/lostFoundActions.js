import {BASE_URL} from "../../utils/constants/lostFoundConstants";

export const putXToken = xToken => {
    return {
        // fixme
        type: 'PUT_X_TOKEN',
        payload: xToken,
    }
}

export const newLostPet = (userName, avatar, type, sex, breed, country, city, street, building, latitude, longitude, photos, tags) => {
    return (dispatch, getState) => {
        const login = getState().accountingReducer.email;
        const xToken = getState().lostFoundReducer.xToken;
        alert(login)
        fetch(`${BASE_URL}lost/${login}`, {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json',
                'X-Token': xToken
            },
            body: {
                userName: userName,
                avatar: avatar,
                type: type,
                sex: sex,
                breed: breed,
                address: {
                    country: country,
                    city: city,
                    street: street,
                    building: building
                },
                location: {
                    latitude: latitude,
                    longitude: longitude,
                },
                photos: photos,
                tags: tags
            }
        })
    }
}