import { connect } from 'react-redux';
import MeetupIndexItem from './meetup_index_item';
import { attendMeetup, unattendMeetup } from '../../actions/meetup_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return  {
    attendMeetup: (userId, meetupId) => dispatch(attendMeetup(userId, meetupId)),
    unattendMeetup: (userId, meetupId) => dispatch(unattendMeetup(userId, meetupId))
  };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MeetupIndexItem));
