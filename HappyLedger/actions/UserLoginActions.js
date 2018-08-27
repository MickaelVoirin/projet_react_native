import { AsyncStorage } from "react-native"
import axios from 'axios'
import urlAPI from '../urlAPI'
import { Actions } from 'react-native-router-flux';

// HACK => temporisation pour la rétro 

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function delay() {
  await sleep(2000);
}

// --------------------------------------

function _saveAuthAsync(auth,token,status) {
  try {
    AsyncStorage.setItem('auth', JSON.stringify(auth));
  } catch (error) {
    console.log(error.message);
  }
  try {
    AsyncStorage.setItem('token', token);
  } catch (error) {
    console.log(error.message);
  }    
  try {
    AsyncStorage.setItem('status', JSON.stringify(status));
  } catch (error) {
    console.log(error.message);
  }    
}

export const getUserLogin = (email,password) => {
  return dispatch => {
    dispatch(getUserLoginBegin());
    axios({
        method:'post',
        url:`${urlAPI}user/login`,
        data: {
          email:email,
          password:password,
        }
      })
      .then(x => {
        if (x.data.auth === true ) {
          _saveAuthAsync(x.data.auth,x.data.token,x.data.status)
          Actions.Home()
        }
      })
      .catch (error => {
      dispatch(getUserLoginError(error));
      })
  }}


export const GET_USER_LOGIN_BEGIN   = 'GET_USER_LOGIN_BEGIN';
export const GET_USER_LOGIN_FAILURE = 'GET_USER_LOGIN_FAILURE';

export const getUserLoginBegin = () => ({
  type: GET_USER_LOGIN_BEGIN
});


export const getUserLoginError = error => ({
  type: GET_USER_LOGIN_FAILURE,
  error: error 
});