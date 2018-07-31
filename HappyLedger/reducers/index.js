import { combineReducers } from 'redux';
import dataReducer from './data'

const allReducers = combineReducers({
  data: dataReducer
})

export default allReducers;
