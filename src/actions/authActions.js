import axios from 'axios';
import { BASE_URL, LOGIN_SUCCESS, LOGIN_FAILURE, AUTH_ERROR, LOGIN_LOADING } from './types';
import * as EmailValidator from 'email-validator';
import { push } from 'connected-react-router';

export const loginUser = (email, password) => async dispatch => {
    //Validate Email and password
    if (email.length > 0 && EmailValidator.validate(email) && password.length > 0) {
        const options = {
            email: email,
            password: password
        }
        // Call Auth Endpoint
        dispatch({type: LOGIN_LOADING})
        await axios.post(`${BASE_URL}/auth`, options)
            .then(res => {
                if (res.data.data){
                    dispatch({type: LOGIN_SUCCESS, payload: res.data.data.access_token})
                    dispatch(push('/'))
                }else {
                    dispatch({
                        type: AUTH_ERROR, payload: { 
                            error:  "Login Failed! Invalid Credentials",
                            status: 401
                        }
                    })
                }
            })
            .catch(err => {
                dispatch({
                    type: AUTH_ERROR, payload: { error: "Login Failed! Invalid Credentials", status: err.status }
                })
            })
    
    } else {
        const err = "Login Failed! Invalid Credentials"
        dispatch({
            type: AUTH_ERROR, payload: { error: err, status: 400 }
        })        
    }


}