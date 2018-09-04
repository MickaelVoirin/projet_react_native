import { combineReducers } from 'redux';
import cameraReducer from './camera';
import listOfFormsReducer from './listOfForms';
import documentLoaderReducer from './documentLoader';
import userLoginReducer from './userLogin';
import notificationsReducer from './notifications';
import addFormsReducer from './addForms';
import sendNotificationReducer from './sendNotification'


const allReducers = combineReducers({
  listOfForms: listOfFormsReducer,
  camera:cameraReducer,
  document:documentLoaderReducer,
  userLogin:userLoginReducer,
  notifications:notificationsReducer,
  addForms: addFormsReducer,
  sendNotification: sendNotificationReducer,
})

export default allReducers;
