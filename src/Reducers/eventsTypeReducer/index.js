import {FETCH_ERROR, FETCH_EVENTS_TYPE} from '../../Actions/types';

export const initialState = {
    isLoading: false,
    fetchError: null,
    eventsType: {}
};

const eventsTypeReducer = (state=initialState, action) => {
    switch(action.type){
        case FETCH_EVENTS_TYPE:
            return {
                ...state, eventsType: action.payload
            };
        case FETCH_ERROR:
            return {
                ...state, fetchError: action.error
            }
        default:
            return state;
    }
}

export default eventsTypeReducer;