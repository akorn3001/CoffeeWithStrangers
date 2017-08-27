import React from 'react';
import { Route } from 'react-router-dom';

import MeetupIndexItem from './meetup_index_item';

class MeetupIndex extends React.Component {

  componentDidMount() {
    this.props.requestAllMeetups();
  }

  render() {
    const { meetups } = this.props;
    return (
      <div>
        <ul className="city-show-meetups-list">
          {meetups.map(meetup => <MeetupIndexItem key={meetup.id} meetup={meetup} />)}
        </ul>
      </div>
    );
  }
}

export default MeetupIndex;
