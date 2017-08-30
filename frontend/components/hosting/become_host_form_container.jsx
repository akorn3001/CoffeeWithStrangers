import { connect } from 'react-redux';
import BecomeHostForm from './become_host_form';
import { updateSingleUser } from '../../actions/user_actions';
// import { login, clearErrors } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser
    // errors: state.session.errors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return  ({
    // clearErrors: () => dispatch(clearErrors())
    setBio: (bio) => dispatch(updateSingleUser({ user: { user_bio: bio }}))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(BecomeHostForm);
