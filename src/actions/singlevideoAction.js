import { SINGLE_VIDEO_REQUEST } from "../constants/videoConstants";

export const singleVideoURL = ( id ) => async (dispatch) => {
  
  dispatch({
    type: SINGLE_VIDEO_REQUEST,
    payload: {
      id
    }
  })
}