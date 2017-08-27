// FETCH ALL
export const fetchAllCities = () => (
  $.ajax({
    method: 'GET',
    url: '/api/cities'
  })
);

export const fetchCityMeetups = (city_id) => (
  $.ajax({
    method: 'GET',
    url: 'api/meetups',
    data: { meetup: {city_id} }
  })
);

export const fetchAllUsers = () => (
  $.ajax({
    method: 'GET',
    url: '/api/users'
  })
);

// FETCH SINGLE
export const fetchSingleMeetup = (meetupId) => (
  $.ajax({
    method: 'GET',
    url: `/api/meetups/${meetupId}`
  })
);

export const fetchSingleUser = (userId) => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${userId}`
  })
);

export const fetchSingleCity = (cityId) => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${cityId}`
  })
);

// CREATE
export const createMeetup = (meetup) => {
  return $.ajax({
    method: 'POST',
    url: '/api/meetups/',
    data: { meetup }
  });
};

// ATTEND / UNATTEND MEETUPS
export const attendMeetup = (meetup) => {
  return $.ajax({
    method: 'POST',
    url: `/api/meetups/${meetup.id}/attend`,
    data: { meetup }
  });
};

export const unattendMeetup = (meetupId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/meetups/${meetupId}/unattend`
  });
};
