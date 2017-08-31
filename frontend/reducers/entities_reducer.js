
import { combineReducers } from 'redux';
import merge from 'lodash/merge';

import UsersReducer from './users_reducer';
import MeetupsReducer from './meetups_reducer';

export default combineReducers({
  users: UsersReducer,
  meetups: MeetupsReducer
});
