import { ALL_VIDEO_REQUEST, ALL_VIDEO_SUCCESS, ALL_VIDEO_FAIL, 
REGISTER_VIDEO_REQUEST, REGISTER_VIDEO_SUCCESS, REGISTER_VIDEO_FAIL, CLEAR_ERRORS } from "../constants/videoConstants";

export const videoReducer = (state = { video: [] }, action) => {
    switch (action.type) {
        case ALL_VIDEO_REQUEST:
        case REGISTER_VIDEO_REQUEST:
            return {
                loading: true,
                video: []
            };

        case ALL_VIDEO_SUCCESS:
            return {
                loading: false,
                video: action.payload.video
            };
        
        case REGISTER_VIDEO_SUCCESS:
            return {
                loading: false,
                message: action.payload.message,
                video: action.payload.video
            }

        case ALL_VIDEO_FAIL:
        case REGISTER_VIDEO_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
    
        default:
            return state;
    }
}