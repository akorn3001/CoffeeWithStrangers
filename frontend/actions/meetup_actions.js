import * as MeetupAPIUtil from '../util/api_util';

export const RECEIVE_ALL_MEETUPS = 'RECEIVE_ALL_MEETUPS';
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

export const requestAllUserAttendedMeetups = (userId) => (dispatch) => {
  return MeetupAPIUtil.fetchCurrentUserAttendedMeetups(userId)
    .then(meetups => {
      dispatch(receiveAllMeetups(meetups));
  });
};

export const requestAllUserHostedMeetups = (userId) => (dispatch) => {
  return MeetupAPIUtil.fetchCurrentUserHostedMeetups(userId)
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

export const attendMeetup = (userId, meetupId) => dispatch => (
  MeetupAPIUtil.attendMeetup(userId, meetupId).then(joinedMeetup => {
    return(
        dispatch(receiveSingleMeetup(joinedMeetup))
    );
  }, err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const unattendMeetup = (userId, meetupId) => dispatch => (
  MeetupAPIUtil.unattendMeetup(userId, meetupId).then(leftMeetup => (
    dispatch(receiveSingleMeetup(leftMeetup))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const receiveAllMeetups = meetups => ({
  type: RECEIVE_ALL_MEETUPS,
  meetups
});

export const receiveSingleMeetup = meetup => ({
  type: RECEIVE_SINGLE_MEETUP,
  meetup,
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});
