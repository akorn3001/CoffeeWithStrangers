import { connect } from 'react-redux';
import Dashboard from './dashboard';
// import { withRouter } from 'react-router-dom';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    // meetups: state.session.currentUser.invitations
  };
};

const mapDispatchToProps = dispatch => {
  return  {
    unattendMeetup: () => dispatch(attendMeetup())
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
