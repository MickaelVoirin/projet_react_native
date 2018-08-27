import {
    GET_USER_LOGIN_BEGIN,
    GET_USER_LOGIN_FAILURE
} from '../actions/UserLoginActions'

const initialState = {
    loading: false,
    error: null
  };

const userLogin = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_LOGIN_BEGIN:
        console.log('begin');
            return {
                ...state,
                loading: true,
                error: null
            };
          case GET_USER_LOGIN_FAILURE:
          console.log('failure');
            return {
              ...state,
              loading: false,
              error: action.error,
            };
      
        default:
            return state
    }
}

export default userLogin