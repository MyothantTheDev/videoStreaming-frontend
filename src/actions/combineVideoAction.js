import axios from "axios";
import { COMBINE_FILE_REQUEST, COMBINE_FILE_SUCCESS, COMBINE_FILE_FAIL, CLEAR_ERRORS} from '../constants/videoConstants';

export const requestCombineFiles = ( combineDataForm ) => async (dispatch) => {
    try {
        dispatch({ type: COMBINE_FILE_REQUEST });

        const config = {
            headers : {
                'Content-Type': 'application/json',
            }
        }

        const { data } = await axios.post('/api/v1/video/combine', combineDataForm, config);

        dispatch({
            type: COMBINE_FILE_SUCCESS,
            payload: data
        })
        
    } catch (error) {

        dispatch({
            type: COMBINE_FILE_FAIL,
            payload: error.response.data
        })
    }
}