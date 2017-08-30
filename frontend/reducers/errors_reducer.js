import merge from 'lodash/merge';

import {
  RECEIVE_ERRORS,
  CLEAR_ERRORS
} from '../actions/error_actions';

import { RECEIVE_SINGLE_USER } from '../actions/user_actions';

let preloadedState = {
  errors: [
    
  ]
};




const ErrorReducer = (preloadedState, action) => {
  let newState = merge({}, state);

  Object.freeze(state);
  let errors;
  switch(action.type) {
    case RECEIVE_ERRORS:
      errors = action.errors;
      return merge({}, state, {
        errors
      });
    case CLEAR_ERRORS:
      errors = action.errors;
      return merge({}, state, {
        errors
      });
    default:
      return state;
  }
};

export default SessionReducer;
