import { connect } from 'react-redux';
import LoginForm from './login_form';
import { login } from '../../actions/session_actions';
import { clearErrors } from '../../actions/error_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: state.currentUser !== null,
    errors: state.errors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return  ({
    login: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
