import React from 'react';

const MeetupIndexItem = ({ meetup }) => {
  return (
    <li className="meetup-index-item">
      <span>Meetup Id: {meetup.id}</span>
      <span>Address: {meetup.address}</span>
      <span>Host Id: {meetup.host_id}</span>
      <span>City Id: {meetup.city_id}</span>
      <span>Date: {meetup.date}</span>
    </li>
  );
}

export default MeetupIndexItem;
