import { combineReducers } from 'redux';
import cameraReducer from './camera';
import listOfFormsReducer from './listOfForms';
import documentLoaderReducer from './documentLoader';
import userLoginReducer from './userLogin';
import notificationsReducer from './notifications';

const allReducers = combineReducers({
  listOfForms: listOfFormsReducer,
  camera:cameraReducer,
  document:documentLoaderReducer,
  userLogin:userLoginReducer,
  notifications:notificationsReducer
})

export default allReducers;
