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
    attendMeetup: (meetupId) => dispatch(attendMeetup(meetupId)),
    unattendMeetup: (meetupId) => dispatch(unattendMeetup(meetupId))
  };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MeetupIndexItem));
