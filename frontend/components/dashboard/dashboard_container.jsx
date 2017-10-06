import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { updateSingleUser } from '../../actions/user_actions';
import { requestAllUserMeetups } from '../../actions/meetup_actions';
import { selectAllMeetups } from '../../reducers/selectors';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => {

  return {
    currentUser: state.session.currentUser,
    attended_meetups: selectAllMeetups(state).filter((meetup) => meetup.host_id !== state.session.currentUser.id),
    hosted_meetups: selectAllMeetups(state).filter((meetup) => meetup.host_id === state.session.currentUser.id)
  };
};

const mapDispatchToProps = dispatch => {
  return  {
    requestAllUserMeetups: (userId) => dispatch(requestAllUserMeetups(userId)),
    unattendMeetup: (userId, meetupId) => dispatch(unattendMeetup(userId, meetupId)),
    becomePendingHost: () => dispatch(updateSingleUser({ user: { host_status: 'pending' }}))
  };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard));
