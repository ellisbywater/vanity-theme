import { GET_IMAGES, LOADING_IMAGES } from '../actions/types'

const initialState = {
    images: [],
    loading: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_IMAGES:
            return {
                ...state,
                images: action.payload,
                loading: false
            }
        case LOADING_IMAGES:
            return {
                ...state,
                loading: true
            }
        default:
            return true
    }
}