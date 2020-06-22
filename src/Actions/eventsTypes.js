import axios from 'axios';
import {BASE_URL, FETCH_EVENTS_TYPE, FETCH_ERROR } from './types';

export const fetchEventsTypes = () => async dispatch => {
    await axios.get(`${BASE_URL}/events/types`)
    .then(response => {
        dispatch({
            type: FETCH_EVENTS_TYPE, payload: response.data.data
        })
    })
    .catch(err => {
        dispatch({
            type: FETCH_ERROR, payload: {error: err, status: err.status}
        })
    })
}