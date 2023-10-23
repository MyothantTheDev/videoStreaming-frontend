import axios from "axios";
import { ALL_STUDENTS_REQUEST, ALL_STUDENTS_SUCCESS, ALL_STUDENTS_FAIL, CLEAR_ERRORS } from "../constants/studentConstant";

//Get ALL STUDENTS

export const getAllStudents = () => async (disptach) => {
    try {

        disptach({ type: ALL_STUDENTS_REQUEST });
        const { data } = await axios.get('/api/v1/admin/students');
        disptach({
            type: ALL_STUDENTS_SUCCESS,
            payload: data
        })

    } catch (error) {
        disptach({
            type: ALL_STUDENTS_FAIL,
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