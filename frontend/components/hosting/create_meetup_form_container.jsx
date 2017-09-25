import { connect } from 'react-redux';
import CreateMeetupForm from './create_meetup_form';
import { createMeetup, receiveSingleMeetup } from '../../actions/meetup_actions';
import { withRouter } from 'react-router-dom';
import { clearErrors } from '../../actions/error_actions';


const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    errors: state.errors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createMeetup: (meetup) => dispatch(createMeetup(meetup)),
    clearErrors: () => dispatch(clearErrors())
  };
};



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateMeetupForm));
