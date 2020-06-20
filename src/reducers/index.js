import {combineReducers} from 'redux';
import eventsReducer from './eventsReducer';
import eventsTypeReducer from './eventsTypeReducer'



export default combineReducers({
  events: eventsReducer,
  eventsType: eventsTypeReducer
})