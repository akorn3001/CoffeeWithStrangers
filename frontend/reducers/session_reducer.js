import merge from 'lodash/merge';

import {
  RECEIVE_CURRENT_USER
} from '../actions/session_actions';

// import { RECEIVE_SINGLE_USER } from '../actions/user_actions';

const nullUser = Object.freeze({
  currentUser: null
});

const SessionReducer = (state = nullUser, action) => {
  let newState = merge({}, state);

  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, nullUser, {
        currentUser
      });

    default:
      return state;
  }
};

export default SessionReducer;
