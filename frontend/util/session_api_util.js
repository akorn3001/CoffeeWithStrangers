export const login = user => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: user
  })
);

export const signup = user => (
  $.ajax({
    method: 'POST',
    url: '/api/users',
    data: { user }
  })
);

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
);

// export const changeUserCity = (userId, cityId) => {
//   return $.ajax({
//     method: 'PATCH',
//     url: `/api/users/${userId}`,
//     data: { user: {city_id: cityId} }
//   });
// };
