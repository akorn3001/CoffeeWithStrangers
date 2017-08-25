import * as APIUtil from '../util/api_util'

// Export constants
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';

// Export synchronous actions
export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

// export const changeCity = user => dispatch => (
//
// );
