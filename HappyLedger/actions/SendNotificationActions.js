import axios from 'axios'
import urlAPI from '../urlAPI'

export const sendNotification = (receiver, askFor) => {
    return dispatch => {
      dispatch(sendNotificationBegin());
      axios({
          method:'post',
          url:`${urlAPI}notification/send`,
          data: {
            receiver:receiver,
            askFor:askFor,
          }
        })
        .then(x => {
            dispatch(sendNotificationSuccess());
        })
        .catch (error => {
          dispatch(sendNotificationError(error));
        })
    }}

export const SEND_NOTIFICATION_BEGIN   = 'SEND_NOTIFICATION_BEGIN';
export const SEND_NOTIFICATION_SUCCESS = 'SEND_NOTIFICATION_SUCCESS';
export const SEND_NOTIFICATION_FAILURE = 'SEND_NOTIFICATION_FAILURE';

export const sendNotificationBegin = () => ({
  type: SEND_NOTIFICATION_BEGIN
});

export const sendNotificationSuccess = () => ({
    type: SEND_NOTIFICATION_SUCCESS,
  });

export const sendNotificationError = error => ({
  type: SEND_NOTIFICATION_FAILURE,
  error: error,
});