import * as MeetupAPIUtil from '../util/api_util';

export const RECEIVE_ALL_MEETUPS = 'RECEIVE_ALL_MEETUPS';
export const RECEIVE_SINGLE_MEETUP = 'RECEIVE_SINGLE_MEETUP';
export const CREATE_MEETUP = 'CREATE_MEETUP';
export const RECEIVE_MEETUP_ERRORS = 'RECEIVE_MEETUP_ERRORS';

export const requestAllMeetups = (cityId) => (dispatch) => {
  return MeetupAPIUtil.fetchCityMeetups(cityId)
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


export const receiveAllMeetups = meetups => ({
  type: RECEIVE_ALL_MEETUPS,
  meetups
});

export const receiveSingleMeetup = payload => ({
  type: RECEIVE_SINGLE_MEETUP,
  payload,
});

export const receiveMeetupErrors = errors => ({
  type: RECEIVE_MEETUP_ERRORS,
  errors
});
