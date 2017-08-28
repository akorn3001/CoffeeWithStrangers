import merge from 'lodash/merge';

import {
  RECEIVE_ALL_MEETUPS,
  RECEIVE_SINGLE_MEETUP
} from '../actions/meetup_actions';

const MeetupsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_MEETUPS:
      return action.meetups;
    case RECEIVE_SINGLE_MEETUP:

      const meetup = action.meetup;
      return merge({}, state, { [meetup.id]: meetup });
    default:
      return state;
  }
};

export default MeetupsReducer;
