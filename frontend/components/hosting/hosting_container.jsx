import { connect } from 'react-redux';
import Hosting from './hosting';
import { updateSingleUser } from '../../actions/user_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => {

  return {
    currentUser: state.session.currentUser,

  };
};

const mapDispatchToProps = dispatch => {
  return  {
    // updateSingleUser: (user) => dispatch(updateSingleUser(user)),
    becomePendingHost: () => dispatch(updateSingleUser({ user: { host_status: 'pending' }})),
    becomeHost: () => dispatch(updateSingleUser({ user: { host_status: "true" }}))
    // requestSingleUser: (userId) => dispatch(requestSingleUser(userId))
  };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Hosting));
