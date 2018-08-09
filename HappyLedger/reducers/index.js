import { combineReducers } from 'redux';
import dataReducer from './data'
import cameraReducer from './camera'

const allReducers = combineReducers({
  data: dataReducer,
  camera:cameraReducer,
})

export default allReducers;
