import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, signup } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: state.currentUser !== null,
    errors: state.session.errors,
    formType: `${ownProps.location.pathname}`,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  if (ownProps.location.pathname === '/login') {
    return  {
      processForm: (user) => dispatch(login(user))
    };
  } else if (ownProps.location.pathname === '/signup') {
    return {
      processForm: (user) => dispatch(signup(user))
    };
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
