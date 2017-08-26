import { RECEIVE_USERS, RECEIVE_SINGLE_USER } from '../actions/user_actions';

const UsersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USERS:
      return Object.assign({}, state, action.users);

    case RECEIVE_SINGLE_USER:
      const user = action.payload.user;

      return Object.assign({}, state, {[user.id]: user});

    default:
      return state;
  }
};

export default UsersReducer;
