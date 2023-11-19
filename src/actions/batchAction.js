import { ALL_BATCH_REQUEST, ALL_BATCH_SUCCESS, ALL_BATCH_FAIL, 
    REGISTER_BATCH_REQUEST, REGISTER_BATCH_SUCCESS, REGISTER_BATCH_FAIL, CLEAR_ERRORS } from "../constants/batchConstants";
import axios from "axios";

//GET ALL BATCH

export const getAllBatch = () => async (disptach) => {
    try {

        disptach({ type: ALL_BATCH_REQUEST });
        const { data } = await axios.get('/api/v1/admin/batch');
        disptach({
            type: ALL_BATCH_SUCCESS,
            payload: data
        })
        
    } catch (error) {

        console.log(error.response.message);
        console.log(error.request.message);

        disptach({
            type: ALL_BATCH_FAIL,
            payload: error
        })
    }
}

// Create New Batch

export const newBatch = (batchName) => async (dispatch) => {
    try {

        dispatch({ type: REGISTER_BATCH_REQUEST })
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const { data } = await axios.post('/api/v1//admin/batch/new', batchName, config);
        dispatch({
            type: REGISTER_BATCH_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: REGISTER_BATCH_FAIL,
            payload: error
        })
    }
}

export const clearErrors = () => async (dispatch) => {
	dispatch({
		type: CLEAR_ERRORS
	})
}