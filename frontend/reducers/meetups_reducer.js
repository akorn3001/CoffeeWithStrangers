import merge from 'lodash/merge';

import {
  RECEIVE_ALL_MEETUPS,
  RECEIVE_SINGLE_MEETUP
} from '../actions/meetup_actions';

const MeetupsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_MEETUPS:
      return merge({}, state, action.meetups);
    case RECEIVE_SINGLE_MEETUP:
      const meetup = action.payload.meetup;
      // poke.item_ids = action.payload.items.map(item => item.id);

      return merge({}, state, { [meetup.id]: meetup });
    default:
      return state;
  }
};

export default MeetupsReducer;
