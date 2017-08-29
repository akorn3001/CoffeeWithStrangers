import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { requestAllUserMeetups } from '../../actions/meetup_actions';
import { selectAllMeetups } from '../../reducers/selectors';
// import { withRouter } from 'react-router-dom';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    meetups: selectAllMeetups(state)
  };
};

const mapDispatchToProps = dispatch => {
  return  {
    // unattendMeetup: () => dispatch(attendMeetup()),
    requestAllUserMeetups: (userId) => dispatch(requestAllUserMeetups(userId))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
