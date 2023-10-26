import { ALL_BATCH_REQUEST, ALL_BATCH_SUCCESS, ALL_BATCH_FAIL, CLEAR_ERRORS } from "../constants/batchConstants";
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
        disptach({
            type: ALL_BATCH_FAIL,
            payload: error
        })
    }
}

export const clearErrors = () => async (dispatch) => {
	dispatch({
		type: CLEAR_ERRORS
	})
}