import { LOGIN_SUCCESS, LOGIN_LOADING, AUTH_ERROR, USER_REGISTERED} from '../../Actions/types';

export const initialState = {
    isLoading: false,
    loginError: null,
    token:null,
    isAuthenticated: false
};

const authReducer = (state=initialState, action) => {
    switch(action.type){
        case LOGIN_LOADING:
            return Object.assign({}, state, {
                loginError: null,
                token: null,
                isLoading: true,
                isAuthenticated: false
            });
        case LOGIN_SUCCESS:
            return Object.assign({}, state, {
                loginError: null,
                token:action.payload,
                isLoading: false,
                isAuthenticated: true
            });
        case USER_REGISTERED:
            return Object.assign({}, state, {
                loginError: null,
                token:action.payload,
                isLoading: false,
                isAuthenticated: true
            });
        case AUTH_ERROR:
            return Object.assign({}, state, {
                loginError: action.payload.error,
                token:null,
                isLoading: false,
                isAuthenticated: false
            });
        default:
            return state;
    }
}

export default authReducer;