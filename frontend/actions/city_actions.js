import * as APIUtil from '../util/session_api_util';

// Export constants
export const RECEIVE_CURRENT_CITY = 'RECEIVE_CURRENT_CITY';
export const RECEIVE_ALL_CITIES = "RECEIVE_ALL_CITIES";
// export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
// export const CLEAR_ERRORS = 'CLEAR_ERRORS';

// Export synchronous actions
export const receiveCurrentCity = currentCity => ({
  type: RECEIVE_CURRENT_CITY,
  currentCity
});

export const receiveAllCities = cities => ({
  type: RECEIVE_ALL_CITIES,
  cities
});

// export const receiveErrors = errors => ({
//   type: RECEIVE_ERRORS,
//   errors
// });
//
// export const clearErrors = () => ({
//   type: CLEAR_ERRORS,
//   errors: []
// });

// Export asynchronous actions
