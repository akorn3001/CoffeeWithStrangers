// FETCH ALL
export const fetchAllCities = () => (
  $.ajax({
    method: 'GET',
    url: '/api/cities'
  })
);

export const fetchCurrentUserMeetups = () => (
  $.ajax({
    method: 'GET',
    url: 'api/meetups',
    // data: { meetup: {user_id} }
  })
);

export const fetchCityMeetups = (city_id) => (
  $.ajax({
    method: 'GET',
    url: `api/cities/${city_id}/meetups`,
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
export const attendMeetup = (meetupId) => {
  return $.ajax({
    method: 'POST',
    url: `/api/meetups/${meetupId}/attend`,
  });
};

export const unattendMeetup = (meetupId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/meetups/${meetupId}/unattend`
  });
};

// EDIT MEETUP / USER

export const updateSingleUser = (user) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/users/${user.id}`,
    data: user
  })
);

export const updateSingleMeetup = (meetup) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/meetups/${meetup.id}`,
    data: { meetup }
  });
};

export const addHostParams = (user, formData, callback) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/users/${user.id}`,
    dataType: 'json',
    contentType: false,
    processData: false,
    data: formData,
    success: callback
  });
};
