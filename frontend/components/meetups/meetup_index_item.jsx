import React from 'react';
import { Link } from 'react-router-dom';

const MeetupIndexItem = (props) => {
  const handleClick = (userId, meetupId) => {
    return(event) => {
      event.preventDefault();
      props.attendMeetup(userId, meetupId)
      .then(() => props.history.push(`/users/${currentUser.id}`));
    };
  };

  const DAYS = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];

  const MONTHS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];

  const meetupDate = new Date(props.meetup.date);
  const weekDayNumber = meetupDate.getDay();
  const weekDayName = DAYS[weekDayNumber];
  const monthNumber = meetupDate.getMonth();
  const monthName = MONTHS[monthNumber];

  function formatAMPM(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0'+minutes : minutes;
    let strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }

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

    // <ul className="meetup-index-item">
    //   <li>{formatAMPM(new Date(meetup.date))}</li>
    //   <li><span>{weekDayName}</span></li>
    //   <li><span>{monthName} {meetupDate.getDate()}</span></li>
    //   <li><span>{meetupDate.toLocaleString()}</span></li>
    //   <li><span>Address: {meetup.address}</span></li>
    //   <li><span>Host: <Link to={`/users/${meetup.host_id}`}>{meetup.host_name}</Link></span></li>
    //   <li><span>City Id: {meetup.city_id}</span></li>
    // </ul>
  );
};

export default MeetupIndexItem;
