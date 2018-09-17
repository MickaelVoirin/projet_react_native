import { combineReducers } from 'redux';
import mediaLoaderReducer from './mediaLoader';
import userLoginReducer from './userLogin';
import notificationsReducer from './notifications';
import addFormsReducer from './addForms';
import sendNotificationReducer from './sendNotification'


const allReducers = combineReducers({
  userLogin:userLoginReducer,
  notifications:notificationsReducer,
  addForms: addFormsReducer,
  sendNotification: sendNotificationReducer,
  media:mediaLoaderReducer
})

export default allReducers;
