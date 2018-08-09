import { AsyncStorage } from "react-native"

// HACK => temporisation pour la rétro 

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function delay() {
  await sleep(2000);
}

// --------------------------------------

retrieveData = async () => {
  try {
    let listOfFormsPromises = await AsyncStorage.getItem('listOfForms');
    await delay();
    if (listOfFormsPromises != null ) {
      return listOfFormsPromises;
    }
  } catch (error) {
    return error
  }
}

export const getListOfForms = () => {
  return dispatch => {
    dispatch(getListOfFormsBegin());
    return retrieveData()
    .then(x => dispatch(getListOfFormsSuccess(JSON.parse(x))))
    .catch(error => dispatch(getListOfFormsError(error)))
  }

}

export const GET_LIST_OF_FORMS_BEGIN   = 'GET_LIST_OF_FORMS_BEGIN';
export const GET_LIST_OF_FORMS_SUCCESS = 'GET_LIST_OF_FORMS_SUCCESS';
export const GET_LIST_OF_FORMS_FAILURE = 'GET_LIST_OF_FORMS_FAILURE';

export const getListOfFormsBegin = () => ({
  type: GET_LIST_OF_FORMS_BEGIN
});

export const getListOfFormsSuccess = listOfForms => ({
  type: GET_LIST_OF_FORMS_SUCCESS,
  listOfForms: listOfForms
});

export const getListOfFormsError = error => ({
  type: GET_LIST_OF_FORMS_FAILURE,
  error: error 
});