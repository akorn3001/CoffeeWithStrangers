import { connect } from 'react-redux';
import EditMeetupForm from './edit_meetup_form';
import { updateSingleMeetup, receiveSingleMeetup } from '../../actions/meetup_actions';
import { withRouter } from 'react-router-dom';
import { clearErrors } from '../../actions/error_actions';


const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    meetup: state.entities.meetups[ownProps.match.params.meetupId],
    errors: state.errors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateSingleMeetup: (meetupId) => dispatch(updateSingleMeetup(meetupId)),
    clearErrors: () => dispatch(clearErrors())
  };
};



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditMeetupForm));
