import React from 'react';
import { Link } from 'react-router-dom';
import { DAYS, MONTHS, formatAMPM } from '../../util/meetups_util';
import DUMMY_CITIES from '../dummy_cities';

const MeetupIndexItem = (props) => {

  const handleEdit = (meetupId) => {
    return(event) => {
      event.preventDefault();
      props.requestSingleMeetup(props.meetup.id)
      .then(() => props.history.push(`/hosting/${props.meetup.id}`));
    };
  };

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
  let meetupEditButton;

  if (props.currentUser) {
    if (props.meetup.host_id === props.currentUser.id) {
      meetupJoinButton =
      <button className="meetup-button blue">
        YOU'RE HOSTING THIS MEETUP
      </button>;

      meetupEditButton =
      <button className="meetup-edit-button" onClick={handleEdit(props.meetup.id)}>
        Edit Meetup
      </button>;
      // meetupEditButton =
      // <Link to={`/hosting/${props.meetup.id}`}>Edit This Meetup</Link>;
    } else if (props.meetup.guest_ids.includes(props.currentUser.id)) {
      meetupJoinButton =
      <button className="meetup-button green">
        YOU JOINED THIS MEETUP
      </button>;

      meetupEditButton = null;

      meetupCancelButton =
      <button className="meetup-button red" onClick={handleUnattend(props.meetup.id)}>
        CANCEL YOUR SPOT
      </button>;
    } else {
      meetupEditButton = null;

      meetupJoinButton =
      <button className="meetup-button orange" onClick={handleAttend(props.meetup.id)}>
        ATTEND THIS EVENT
      </button>;


    }
  } else {
    meetupJoinButton =
    <Link className="sign-in-to-schedule" to="/login">
      Sign in to schedule
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
        <span><strong>City</strong> {DUMMY_CITIES.find((city) => props.meetup.city_id === city.id).name}</span>
      </div>

      {meetupJoinButton}
      {meetupCancelButton}
      {meetupEditButton}
    </div>
  );
};

export default MeetupIndexItem;
