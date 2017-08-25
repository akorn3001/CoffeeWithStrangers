export const fetchAllTweets = () => (
  $.ajax({
    method: 'GET',
    url: 'api/tweets'
  })
);

export const createTweet = (tweet) => {
  return $.ajax({
    method: 'POST',
    url: 'api/tweets/',
    data: { tweet }
  });
};

export const fetchAllMeetups = () => (
  $.ajax({
    method: 'GET',
    url: 'api/meetups'
  })
);

export const fetchSingleMeetup = (meetupId) => (
  $.ajax({
    method: 'GET',
    url: `/api/lists/${meetupId}`
  })
);

export const fetchAllUsers = () => (
  $.ajax({
    method: 'GET',
    url: '/api/users'
  })
);

export const fetchSingleUser = (userId) => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${userId}`
  })
);
