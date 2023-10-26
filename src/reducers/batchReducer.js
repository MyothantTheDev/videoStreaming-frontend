import { ALL_BATCH_REQUEST, ALL_BATCH_SUCCESS, ALL_BATCH_FAIL, CLEAR_ERRORS } from "../constants/batchConstants";

export const batchReducer = (state = { batch : []}, action) =>  {
    switch (action.type) {
        case ALL_BATCH_REQUEST:
            return {
                loading: true,
                batch: []
            };
            
        case ALL_BATCH_SUCCESS:
            return {
                loading: false,
                batch: action.payload.batch,
                batchCount: action.payload.count
            };

        case ALL_BATCH_FAIL:
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