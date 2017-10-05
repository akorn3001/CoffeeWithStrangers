import { connect } from 'react-redux';
import BecomeHostForm from './become_host_form';
import { updateSingleUser, addHostParams } from '../../actions/user_actions';
import { clearErrors } from '../../actions/error_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    errors: state.errors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return  {
    // setBio: (bio) => dispatch(updateSingleUser({ user:  bio })),
    // setImgURL: (url) => dispatch(updateSingleUser({ user:  { img_url: url } })),
    becomeHost: () => dispatch(updateSingleUser({ user: { host_status: "true" }})),
    clearErrors: () => dispatch(clearErrors()),
    addHostParams: (user, formData, callback) => dispatch(addHostParams(user, formData, callback))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BecomeHostForm);
