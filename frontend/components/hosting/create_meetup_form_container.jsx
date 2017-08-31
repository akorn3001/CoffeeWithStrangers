import { connect } from 'react-redux';
import CreateMeetupForm from './create_meetup_form';
import { createMeetup, attendMeetup, receiveSingleMeetup } from '../../actions/meetup_actions';
import { withRouter } from 'react-router-dom';


const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = state => {
  return {
    createMeetup: (meetup) => dispatch(createMeetup(meetup)),
    attendMeetup: (meetupId) => dispatch(attendMeetup(meetupId))
  };
};



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateMeetupForm));
