import axios from 'axios';
import {BASE_URL, FETCH_EVENTS, FETCH_ERROR } from './types';

export const fetchEvents = () => async dispatch => {
    await axios.get(`${BASE_URL}/events`)
    .then(response => {
        dispatch({
            type: FETCH_EVENTS, payload: response.data.data
        })
    })
    .catch(err => {
        dispatch({
            type: FETCH_ERROR, payload: {error: err, status: err.status}
        })
    })
}