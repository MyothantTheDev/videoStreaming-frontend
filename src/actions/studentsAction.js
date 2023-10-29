import axios from "axios";
import { ALL_STUDENTS_REQUEST, ALL_STUDENTS_SUCCESS, ALL_STUDENTS_FAIL, 
REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, REGISTER_USER_FAIL,
DELETE_STUDENT_REQUEST, DELETE_STUDENT_SUCCESS, DELETE_STUDENT_FAIL , CLEAR_ERRORS } from "../constants/studentConstant";

//Get ALL STUDENTS

export const getAllStudents = () => (disptach) => {

        disptach({ type: ALL_STUDENTS_REQUEST });
        axios.get('/api/v1/admin/students').then((response) => {
			disptach({
				type: ALL_STUDENTS_SUCCESS,
				payload: response.data
			})
		})
    	.catch(error => {
			disptach({
				type: ALL_STUDENTS_FAIL,
				payload: error
			})
		})
}

//Register

export const register = (userData) => async (dispatch) => {
	try {
			dispatch({ type: REGISTER_USER_REQUEST })
			const config = {
				headers: {
					'Content-Type': 'application/json'
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

// DELETE STUDENT

export const deleteStudent = (id) => async (dispatch) => {
	try {
		dispatch({ type: DELETE_STUDENT_REQUEST })

		const { data } = await axios.delete(`/api/v1/admin/students?_id=${id}`);
		dispatch({
			type: DELETE_STUDENT_SUCCESS,
			payload: data
		})

	} catch (error) {
		dispatch({
			type: DELETE_STUDENT_FAIL,
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