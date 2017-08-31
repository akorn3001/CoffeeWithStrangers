import merge from 'lodash/merge';

import {
  RECEIVE_ERRORS,
  CLEAR_ERRORS
} from '../actions/error_actions';

import { RECEIVE_SINGLE_USER } from '../actions/user_actions';


const ErrorsReducer = (state = [], action) => {
  let newState = merge({}, state);

  Object.freeze(state);
  let errors;
  switch(action.type) {
    case RECEIVE_ERRORS:
      errors = action.errors;
      return action.errors;
    case CLEAR_ERRORS:
      errors = action.errors;
      return [];
    default:
      return state;
  }
};

export default ErrorsReducer;
