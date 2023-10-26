import { ALL_STUDENTS_REQUEST, ALL_STUDENTS_SUCCESS, ALL_STUDENTS_FAIL, 
REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, REGISTER_USER_FAIL,
CLEAR_ERRORS } from "../constants/studentConstant";

export const studentsReducer = (state = { students : []}, action) =>  {
    switch (action.type) {
        case ALL_STUDENTS_REQUEST:
        case REGISTER_USER_REQUEST:
            return {
                loading: true,
                students: []
            };
            
        case ALL_STUDENTS_SUCCESS:
            return {
                loading: false,
                students: action.payload.student,
                studentsCount: action.payload.count
            };

        case REGISTER_USER_SUCCESS:
            return {
                loading: false,
                students: action.payload.student,
                message: action.payload.message
            }

        case ALL_STUDENTS_FAIL:
        case REGISTER_USER_FAIL:
            return {
                loading: false,
                error: action.payload
            };

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };

        default:
            return state;
    }
}