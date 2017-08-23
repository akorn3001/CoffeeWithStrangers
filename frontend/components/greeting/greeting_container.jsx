import { connect } from 'react-redux';
import Greeting from './greeting';
import { logout } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = dispatch => {
  return  {
    logout: () => dispatch(logout())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Greeting));
