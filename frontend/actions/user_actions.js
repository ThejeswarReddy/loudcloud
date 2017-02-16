import { receiveModal } from './modal_actions';
import { receiveCurrentUser } from './session_actions';
import * as APIUtil from '../util/user_api_util';

export const RECEIVE_USER_IN_VIEW = 'RECEIVE_USER_IN_VIEW';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';

export const receiveUserInView = (user) => ({
  type: RECEIVE_USER_IN_VIEW,
  user
});

export const receiveUserErrors = (errors) => ({
  type: RECEIVE_USER_ERRORS,
  errors
});

export const updateUser = (user) => dispatch => {
  return APIUtil.updateUser(user)
    .then((user) => {
      dispatch(receiveUserInView(user))
      dispatch(receiveModal(''))
      dispatch(receiveCurrentUser(user))
    },
      (errors) => dispatch(receiveUserErrors(errors)));
};