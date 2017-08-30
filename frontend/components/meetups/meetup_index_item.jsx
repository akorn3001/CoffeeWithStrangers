import React from 'react';
import { Link } from 'react-router-dom';
import { DAYS, MONTHS, formatAMPM } from '../../util/meetups_util';

const MeetupIndexItem = (props) => {

  const handleAttend = (meetupId) => {
    return(event) => {
      event.preventDefault();
      props.attendMeetup(meetupId)
      .then(() => props.history.push('/profile'));
    };
  };

  const handleUnattend = (meetupId) => {
    return(event) => {
      event.preventDefault();
      props.unattendMeetup(meetupId)
      .then(() => props.history.push('/profile'));
    };
  };

  const meetupDate = new Date(props.meetup.date);
  const weekDayNumber = meetupDate.getDay();
  const weekDayName = DAYS[weekDayNumber];
  const monthNumber = meetupDate.getMonth();
  const monthName = MONTHS[monthNumber];

  let meetupJoinButton;
  let meetupCancelButton;

  if (props.currentUser) {
    if (props.meetup.host_id === props.currentUser.id) {
      meetupJoinButton =
      <button className="meetup-join-button">
        YOU'RE HOSTING THIS EVENT
      </button>;
    } else if (props.meetup.guest_ids.includes(props.currentUser.id)) {
      meetupJoinButton =
      <button className="meetup-join-button green">
        YOU JOINED THIS MEETUP
      </button>;

      meetupCancelButton =
      <button className="meetup-cancel-button" onClick={handleUnattend(props.meetup.id)}>
        CANCEL YOUR SPOT
      </button>;
    } else {

      meetupJoinButton =
      <button className="meetup-join-button" onClick={handleAttend(props.meetup.id)}>
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
        <span><strong>Address</strong> {props.meetup.address}</span>
        <span><strong>Host</strong> <Link to={`/users/${props.meetup.host_id}`}>{props.meetup.host_name}</Link></span>
        <span><strong>City Id</strong> {props.meetup.city_id}</span>
      </div>

      {meetupJoinButton}
      {meetupCancelButton}
    </div>
  );
};

export default MeetupIndexItem;
