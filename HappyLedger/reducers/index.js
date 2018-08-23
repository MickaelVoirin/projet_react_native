import { combineReducers } from 'redux';
import cameraReducer from './camera'
import listOfFormsReducer from './listOfForms'
import documentLoaderReducer from './documentLoader'

const allReducers = combineReducers({
  listOfForms: listOfFormsReducer,
  camera:cameraReducer,
  document:documentLoaderReducer
})

export default allReducers;
