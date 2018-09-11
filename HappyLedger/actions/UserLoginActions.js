import { AsyncStorage } from "react-native"
import axios from 'axios'
import urlAPI from '../urlAPI'
import { Actions } from 'react-native-router-flux';


// sauvegarde dans le stockage du téléphone l'identification de l'utilisateur
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
    AsyncStorage.setItem('status', status);
  } catch (error) {
    console.log(error.message);
  }    
}

// identification de l'utilisateur via une requete au backend
// lance une suite d'actions 
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