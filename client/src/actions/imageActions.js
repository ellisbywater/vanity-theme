import axios from 'axios'
import { GET_IMAGES, LOADING_IMAGES } from './types'
import { returnErrors } from './errorActions';

export const getImages = () => dispatch => {
    dispatch(setImagesLoading())
    axios.get('/api/images')
        .then(res => 
            dispatch({
                type: GET_IMAGES,
                payload: res.data
            })
        )
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status))
        })
}

export const setImagesLoading = () => {
    return {
        type: LOADING_IMAGES
    }
}