import {combineReducers} from 'redux';
import eventsReducer from './eventsReducer';
import eventsTypeReducer from './eventsTypeReducer';
import authReducer from './authReducer'
import { connectRouter } from 'connected-react-router'



const combineRed = (history) => combineReducers({
  router: connectRouter(history),
  events: eventsReducer,
  eventsType: eventsTypeReducer,
  auth: authReducer
});

export default combineRed;