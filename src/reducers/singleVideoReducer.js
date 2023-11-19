import { SINGLE_VIDEO_REQUEST, CLEAR_ERRORS } from "../constants/videoConstants";

export const SingleVideoReducer = (state = { videoId: {} }, action) => {
	switch (action.type) {
		case SINGLE_VIDEO_REQUEST:
			return {
				videoId: action.payload.id
			}
	
		default:
			return state
	}
}

export const clearErrors = () => async (dispatch) => {
	dispatch({
		type: CLEAR_ERRORS
	})
}