import values from 'lodash/values';

export const selectAllMeetups = state => values(state.entities.meetups);

export const selectAllCities = state => values(state.entities.cities);
