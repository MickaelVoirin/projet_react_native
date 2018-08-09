import {
    GET_LIST_OF_FORMS_BEGIN,
    GET_LIST_OF_FORMS_SUCCESS,
    GET_LIST_OF_FORMS_FAILURE
} from '../actions/ListOfFormsActions'

const initialState = {
    items: [],
    loading: false,
    error: null
  };

const listOfForms = (state = initialState, action) => {
    switch (action.type) {
        case GET_LIST_OF_FORMS_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };
            case GET_LIST_OF_FORMS_SUCCESS:
            return {
              ...state,
              loading: false,
              items: action.listOfForms
            };
      
          case GET_LIST_OF_FORMS_FAILURE:
            return {
              ...state,
              loading: false,
              error: action.error,
              items: []
            };
      
        default:
            return state
    }
}

export default listOfForms