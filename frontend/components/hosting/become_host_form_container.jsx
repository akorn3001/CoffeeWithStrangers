import { connect } from 'react-redux';
import BecomeHostForm from './become_host_form';
import { updateSingleUser } from '../../actions/user_actions';
import { clearErrors } from '../../actions/error_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    errors: state.errors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return  ({
    // clearErrors: () => dispatch(clearErrors())
    setBio: (bio) => dispatch(updateSingleUser({ user:  bio })),
    becomeHost: () => dispatch(updateSingleUser({ user: { host_status: "true" }})),
    clearErrors: () => dispatch(clearErrors())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(BecomeHostForm);
