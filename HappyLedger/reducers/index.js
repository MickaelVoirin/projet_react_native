import { combineReducers } from 'redux';
import listOfFormsReducer from './listOfForms'

const allReducers = combineReducers({
  listOfForms: listOfFormsReducer
})

export default allReducers;
