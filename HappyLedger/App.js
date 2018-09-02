// IMPORT REACT 
import React from 'react';

// IMPORT REDUX
import { createStore , applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

// IMPORT ALL REDUCERS
import allReducers from './reducers';


import Launch from './containers/Launch';

const store = createStore(allReducers, applyMiddleware(thunk));
 
export default class App extends React.Component {

  render() {
      return (
        <Provider store={store}>
            <Launch />        
        </Provider>
      );
    
  }
}
