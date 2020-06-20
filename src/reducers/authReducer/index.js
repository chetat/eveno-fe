import { LOGIN_SUCCESS, LOGIN_LOADING, AUTH_ERROR} from '../../actions/types';

export const initialState = {
    isLoading: false,
    loginError: null,
    token:null
};

const authReducer = (state=initialState, action) => {
    switch(action.type){
        case LOGIN_LOADING:
            return {
                ...state, isLoading: true
            }
        case LOGIN_SUCCESS:
            return  {
                ...state, token:action.payload
              }
        case AUTH_ERROR:
            return  {
                ...state, loginError: action.payload.error
            }
        
        default:
            return state;
    }
}

export default authReducer;