
import { combineReducers } from 'redux';
import merge from 'lodash/merge';

import UsersReducer from './users_reducer';
import CitiesReducer from './cities_reducer';
import MeetupReducer from './meetups_reducer';

export default combineReducers({
  users: UsersReducer,
  cities: CitiesReducer,
  meetups: MeetupReducer
});
