const initialState = {
   images:[],
}

export const lostFoundReducer = (state = initialState, action) => {
    console.log('ImageREducer')
    switch (action.type) {
        case 'PUT_INFO':
            const info = action.payload
            return {...state, info}
        case 'PUT_MESSAGEE':
            const message = action.payload;
            return {...state, message}
        case 'PUT_IMG':
            const images = [...state.images]
            images.push(action.payload);
            return {...state, images}
        default:
            return state
    }
}