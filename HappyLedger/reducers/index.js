import { combineReducers } from 'redux';
import listOfFormsReducer from './listOfForms';
import mediaLoaderReducer from './mediaLoader';
import userLoginReducer from './userLogin';
import notificationsReducer from './notifications';
import addFormsReducer from './addForms';
import sendNotificationReducer from './sendNotification'


const allReducers = combineReducers({
  listOfForms: listOfFormsReducer,
  userLogin:userLoginReducer,
  notifications:notificationsReducer,
  addForms: addFormsReducer,
  sendNotification: sendNotificationReducer,
  media:mediaLoaderReducer
})

export default allReducers;
