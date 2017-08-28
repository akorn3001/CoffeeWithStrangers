import React from 'react';
import { Link } from 'react-router-dom';

class MeetupIndexItemClass extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { meetups } = this.props;

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

    const meetupDate = new Date(meetup.date);
    const weekDayNumber = meetupDate.getDay();
    const weekDayName = DAYS[weekDayNumber];
    const monthNumber = meetupDate.getMonth();
    const monthName = MONTHS[monthNumber];

    function formatAMPM(date) {
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let ampm = hours >= 12 ? 'pm' : 'am';
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? '0'+minutes : minutes;
      let strTime = hours + ':' + minutes + ' ' + ampm;
      return strTime;
    }

    return (
      <div className="meetup-index-item">
        <ul className="meetup-time-info">
          <li className="meetup-day-name">{weekDayName}</li>
          <li className="meetup-date">{monthName} {meetupDate.getDate()} {meetupDate.getFullYear()}</li>
          <li className="meetup-time">{formatAMPM(meetupDate)}</li>
        </ul>

        <div className="meetup-extra-info">
          <span>Address: {meetup.address}</span>
          <span>Host: <Link to={`/users/${meetup.host_id}`}>{meetup.host_name}</Link></span>
          <span>City Id: {meetup.city_id}</span>
        </div>
      </div>
    );
  }
}

export default MeetupIndexItemClass;
