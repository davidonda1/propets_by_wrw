const initialState = {
    xToken: '',
    userName: "Anna Smith",
    avatar: "https://www.gravatar.com/avatar/0?d=mp",
    type: "cat",
    sex: "male",
    breed: "british",
    address: {
        country: "Israel",
        city: "Tel Aviv",
        street: "Herzel",
        building: 10
    },
    location: {
        latitude: 31.35,
        longitude: 35.35
    },
    photos: ["www.image1.com", "www.image2.com"],
    tags: ["tag1", "tag2", "tag3", "color1", "color2"]

}

export const lostFoundReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}