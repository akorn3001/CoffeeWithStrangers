import * as SessionAPIUtil from '../util/session_api_util'

// Export constants
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

// Export synchronous actions
export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
  errors: []
});

// Export asynchronous actions
export const signup = user => dispatch => (
  SessionAPIUtil.signup(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const login = user => dispatch => (
  SessionAPIUtil.login(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const logout = () => dispatch => (
  SessionAPIUtil.logout().then(user => (
    dispatch(receiveCurrentUser(null))
  ))
);

export const changeUserCity = (userId, cityId) => (dispatch) => {
  return SessionAPIUtil.changeUserCity(userId, cityId)
    .then(user => dispatch(receiveCurrentUser(user)));
};
