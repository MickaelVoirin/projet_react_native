import {
    SEND_NOTIFICATION_BEGIN,
    SEND_NOTIFICATION_SUCCESS,
    SEND_NOTIFICATION_FAILURE,
} from '../actions/SendNotificationActions'

const initialState = {
    success: false,
    sending: false,
    error: null
  };

const userLogin = (state = initialState, action) => {
    switch (action.type) {
        case SEND_NOTIFICATION_BEGIN:
            return {
                ...state,
                sending: true,
            };
        case SEND_NOTIFICATION_SUCCESS:
            return {
              ...state,
              success: true,
              sending: false,
              error: null,
            };
          case SEND_NOTIFICATION_FAILURE:
            return {
              ...state,
              sending: false,
              error: action.error,
            };
      
        default:
            return state
    }
}

export default userLogin