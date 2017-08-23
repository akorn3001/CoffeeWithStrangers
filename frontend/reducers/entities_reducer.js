
import { combineReducers } from 'redux';
import merge from 'lodash/merge';

import UsersReducer from './users_reducer';
import CitiesReducer from './cities_reducer';

export default combineReducers({
  users: UsersReducer,
  cities: CitiesReducer,
});
