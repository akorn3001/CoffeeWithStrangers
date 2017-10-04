import * as APIUtil from '../util/api_util';
import { receiveCurrentUser } from './session_actions';

// Export constants
export const RECEIVE_SINGLE_USER = 'RECEIVE_SINGLE_USER';
export const RECEIVE_USERS = 'RECEIVE_ALL_USERS';

// Export synchronous actions
export const receiveSingleUser = user => {
  return ({
    type: RECEIVE_SINGLE_USER,
    user
  });
};

export const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
});

// Export asynchronous actions
export const requestSingleUser = (userId) => (dispatch) => {
  return APIUtil.fetchSingleUser(userId)
    .then(user => dispatch(receiveSingleUser(user)));
};

export const updateSingleUser = (user) => (dispatch) => {
  return APIUtil.updateSingleUser(user)
  .then(updatedUser => dispatch(receiveCurrentUser(updatedUser)));
};

export const addHostParams = (user, formData, callback) => (dispatch) => {
  return APIUtil.addHostParams(user, formData, callback)
  .then(updatedUser => dispatch(receiveCurrentUser(updatedUser)));
};


// export const changeUserCity = (userId, cityId) => (dispatch) => {
//   return APIUtil.changeUserCity(userId, cityId)
//     .then(user => dispatch(receiveCurrentUser(user)));
// };
