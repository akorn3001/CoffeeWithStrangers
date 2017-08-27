import React from 'react';

import MeetupIndexItem from './meetup_index_item';

class MeetupIndex extends React.Component {

  componentDidMount() {
    this.props.requestAllMeetups(this.props.city);
  }

  componentWillReceiveProps(nextProps) {
    debugger
    if (this.props.city !== nextProps.city) {
      this.props.requestAllMeetups(nextProps.city);
    }
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
