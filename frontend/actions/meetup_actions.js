import * as MeetupAPIUtil from '../util/api_util';

export const RECEIVE_ALL_MEETUPS = 'RECEIVE_ALL_MEETUPS';
export const REMOVE_SINGLE_MEETUP = 'REMOVE_SINGLE_MEETUP';
export const RECEIVE_SINGLE_MEETUP = 'RECEIVE_SINGLE_MEETUP';
export const CREATE_MEETUP = 'CREATE_MEETUP';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const requestAllCityMeetups = (cityId) => (dispatch) => {
  return MeetupAPIUtil.fetchCityMeetups(cityId)
    .then(meetups => {
      dispatch(receiveAllMeetups(meetups));
  });
};

export const requestAllUserMeetups = (userId) => (dispatch) => {
  return MeetupAPIUtil.fetchCurrentUserMeetups(userId)
    .then(meetups => {
      dispatch(receiveAllMeetups(meetups));
  });
};

export const requestSingleMeetup = (id) => (dispatch) => {
  return MeetupAPIUtil.fetchSingleMeetup(id).then(meetup => {
    dispatch(receiveSingleMeetup(meetup));
    return meetup;
  });
};

export const createMeetup = meetup => dispatch => (
  MeetupAPIUtil.createMeetup(meetup).then(meetup => {
    dispatch(receiveSingleMeetup(meetup));
    return meetup;
  }).fail(err => dispatch(receiveMeetupErrors(err.responseJSON)))
);

export const attendMeetup = (meetupId) => dispatch => (
  MeetupAPIUtil.attendMeetup(meetupId).then(joinedMeetup => {
    return(
        dispatch(receiveSingleMeetup(joinedMeetup))
    );
  }, err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const unattendMeetup = (meetupId) => dispatch => {
  debugger
  return (
    MeetupAPIUtil.unattendMeetup(meetupId).then(leftMeetup => (
      dispatch(removeSingleMeetup(leftMeetup))
    ), err => (
      dispatch(receiveErrors(err.responseJSON))
    ))
  );
};

export const receiveAllMeetups = meetups => ({
  type: RECEIVE_ALL_MEETUPS,
  meetups
});

export const receiveSingleMeetup = meetup => ({
  type: RECEIVE_SINGLE_MEETUP,
  meetup,
});

export const removeSingleMeetup = meetup => ({
  type: REMOVE_SINGLE_MEETUP,
  meetup,
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});
