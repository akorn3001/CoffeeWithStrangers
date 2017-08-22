import { connect } from 'react-redux';
import SignupForm from './signup_form';
import { signup } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: state.currentUser !== null,
    errors: state.session.errors,
    // formType: `${ownProps.location.pathname}`,
  };
};

const mapDispatchToProps = (dispatch) => {
  return  { signup: (user) => dispatch(signup(user))};
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
