import React from 'react';

const MeetupIndexItem = ({ meetup }) => {
  const DAYS = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const meetupDate = new Date(meetup.date);
  const weekDayNumber = meetupDate.getDay();
  const weekDayName = DAYS[weekDayNumber];

  return (
    <li className="meetup-index-item">
      <span>Meetup Id: {meetup.id}</span>
      <span>Address: {meetup.address}</span>
      <span>Host Id: {meetup.host_name}</span>
      <span>City Id: {meetup.city_id}</span>
      <span>Date: {weekDayName}, {meetupDate.toLocaleString()}</span>
    </li>
  );
}

export default MeetupIndexItem;
