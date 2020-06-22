import {FETCH_EVENTS, FETCH_ERROR} from '../../Actions/types';

export const initialState = {
    isLoading: false,
    fetchError: null,
    events: {}
};

const eventsReducer = (state=initialState, action) => {
    switch(action.type){
        case FETCH_EVENTS:
            return {
                ...state, events: action.payload
            };
        case FETCH_ERROR:
            return {
                ...state, fetchError: action.error
            }
        default:
            return state;
    }
}

export default eventsReducer;