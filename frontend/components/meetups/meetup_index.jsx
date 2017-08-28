import React from 'react';
import MeetupIndexItemContainer from './meetup_index_item_container';

class MeetupIndex extends React.Component {

  componentDidMount() {
    this.props.requestAllMeetups(this.props.city);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.city !== nextProps.city) {
      this.props.requestAllMeetups(nextProps.city);
    }
  }

  render() {
    const { meetups } = this.props;
    return (
      <div className="city-show-meetups">
        {meetups.map(meetup => <MeetupIndexItemContainer key={meetup.id} meetup={meetup} />)}
      </div>
    );
  }
}

export default MeetupIndex;
