import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import CitiesReducer from './cities_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  entities: CitiesReducer
});

export default RootReducer;
