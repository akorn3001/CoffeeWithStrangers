import React from 'react';
import { Link } from 'react-router-dom';
import { DAYS, MONTHS, formatAMPM } from '../../util/meetups_util';

const MeetupIndexItem = (props) => {
  const handleClick = (userId, meetupId) => {
    return(event) => {
      event.preventDefault();
      props.attendMeetup(userId, meetupId)
      .then(() => props.history.push('/profile'));
    };
  };

  const meetupDate = new Date(props.meetup.date);
  const weekDayNumber = meetupDate.getDay();
  const weekDayName = DAYS[weekDayNumber];
  const monthNumber = meetupDate.getMonth();
  const monthName = MONTHS[monthNumber];

  let meetupJoinButton;

  if (props.currentUser) {
    if (props.meetup.guest_ids.includes(props.currentUser.id)) {
      meetupJoinButton =
      <button className="meetup-join-button green">
        YOU JOINED THIS MEETUP
      </button>;
    } else {
      meetupJoinButton =
      <button className="meetup-join-button" onClick={handleClick(props.currentUser.id, props.meetup.id)}>
        SIGN UP
      </button>;
    }
  } else {
    meetupJoinButton =
    <Link to="/login">
      SIGN IN TO SCHEDULE
    </Link>;
  }

  return (
    <div className="meetup-index-item">
      <ul className="meetup-time-info">
        <li className="meetup-day-name">{weekDayName}</li>
        <li className="meetup-date">{monthName} {meetupDate.getDate()} {meetupDate.getFullYear()}</li>
        <li className="meetup-time">{formatAMPM(meetupDate)}</li>
      </ul>

      <div className="meetup-extra-info">
        <span>Address: {props.meetup.address}</span>
        <span>Host: <Link to={`/users/${props.meetup.host_id}`}>{props.meetup.host_name}</Link></span>
        <span>City Id: {props.meetup.city_id}</span>
      </div>

      {meetupJoinButton}
    </div>
  );
};

export default MeetupIndexItem;
