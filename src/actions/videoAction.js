import { ALL_VIDEO_REQUEST, ALL_VIDEO_SUCCESS, ALL_VIDEO_FAIL, 
    REGISTER_VIDEO_REQUEST, REGISTER_VIDEO_SUCCESS, REGISTER_VIDEO_FAIL, 
    DELETE_VIDEO_REQUEST, DELETE_VIDEO_SUCCESS, DELETE_VIDEO_FAIL, CLEAR_ERRORS } from "../constants/videoConstants";
import axios from "axios";

// GET ALL VIDEOS

export const getAllVideo = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_VIDEO_REQUEST });
        const { data } = await axios.get('/api/v1/video');
        dispatch({
            type: ALL_VIDEO_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ALL_VIDEO_FAIL,
            payload: error 
        })
    }
}

// POST REGISTER VIDEO

export const registerVideo = ( files ) => async (dispatch) => {
    try {
        dispatch({ type: REGISTER_VIDEO_REQUEST });
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        }
        const { data } = await axios.post('/api/v1/video/new', files, config);
        dispatch({
            type: REGISTER_VIDEO_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: REGISTER_VIDEO_FAIL,
            payload: error
        })
    }
}

// Delete Video

export const deleteVideo = ( deleteID ) => async (dispatch) => {
    try {
        dispatch({ type: DELETE_VIDEO_REQUEST });

        const { data } = await axios.delete(`/api/v1/video/delete?id=${deleteID}`);

        dispatch({
            type: DELETE_VIDEO_SUCCESS,
            payload: data

        })
        
    } catch (error) {
        dispatch({
            type: DELETE_VIDEO_FAIL,
            payload: error
        })
    }
}

//CLEAR ERROR

export const clearErrors = () => async (dispatch) => {
	dispatch({
		type: CLEAR_ERRORS
	})
}