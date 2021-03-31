const initialState = {
    userName: "Anna Smith",
    avatar: "https://www.gravatar.com/avatar/0?d=mp",
    type: "cat",
    sex: "male",
    breed: "british",
    location: {

        latitude: 31.78,
        longitude: 35.23
    },
    address:{
        country: "Israel",
        city: "Tel Aviv",
        street: "Herzel",
        building: 10
    },
    photos: ["www.image1.com", "www.image2.com"],
    tags : ["tag1", "tag2", "tag3", "color1", "color2"]
}

export const lostFoundReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'PUT_INFO':
            const info=action.payload
            return {...state,info}
        default:
            return state
    }
}