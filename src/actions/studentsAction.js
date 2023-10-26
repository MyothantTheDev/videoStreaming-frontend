import axios from "axios";
import { ALL_STUDENTS_REQUEST, ALL_STUDENTS_SUCCESS, ALL_STUDENTS_FAIL, 
REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, REGISTER_USER_FAIL,CLEAR_ERRORS } from "../constants/studentConstant";

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

//Register

export const register = (userData) => async (dispatch) => {
	try {
			dispatch({ type: REGISTER_USER_REQUEST })
			const config = {
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				}
			}
			const { data } = await axios.post('/api/v1/admin/student/new', userData, config)
			dispatch({
				type: REGISTER_USER_SUCCESS,
				payload: data
			})
	} catch (error) {
		dispatch({
			type: REGISTER_USER_FAIL,
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