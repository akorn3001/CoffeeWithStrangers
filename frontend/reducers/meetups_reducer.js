import merge from 'lodash/merge';

import { RECEIVE_ALL_MEETUPS, RECEIVE_SINGLE_MEETUP, REMOVE_SINGLE_MEETUP } from '../actions/meetup_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const MeetupsReducer = (state = {}, action) => {
  Object.freeze(state);
  let meetup;
  switch (action.type) {
    case RECEIVE_ALL_MEETUPS:
      return action.meetups;
    // case RECEIVE_CURRENT_USER:
    //   return action.currentUser.meetups;
    case RECEIVE_SINGLE_MEETUP:

      meetup = action.meetup;
      return merge({}, state, { [meetup.id]: meetup });
    case REMOVE_SINGLE_MEETUP:
      meetup = action.meetup;
      const newState = Object.assign({}, state);
      delete newState[meetup.id];
      return newState;
    default:
      return state;
  }
};

export default MeetupsReducer;
