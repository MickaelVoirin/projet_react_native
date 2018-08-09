import { combineReducers } from 'redux';
import cameraReducer from './camera'
import listOfFormsReducer from './listOfForms'

const allReducers = combineReducers({
  listOfForms: listOfFormsReducer,
  camera:cameraReducer,
})

export default allReducers;
