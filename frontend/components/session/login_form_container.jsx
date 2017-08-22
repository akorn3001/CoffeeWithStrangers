import { connect } from 'react-redux';
import LoginForm from './login_form';
import { login } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: state.currentUser !== null,
    errors: state.session.errors,
    // formType: `${ownProps.location.pathname}`,
  };
};

const mapDispatchToProps = (dispatch) => {
  return  { login: (user) => dispatch(login(user))};
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
