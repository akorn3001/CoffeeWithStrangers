import { connect } from 'react-redux';
import MeetupIndex from './meetup_index';
import { requestAllMeetups } from '../../actions/meetup_actions';
import { selectAllMeetups } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  return { meetups: selectAllMeetups(state)};
  // city: state.entities.cities[state.session.currentUser.city_id]
};

const mapDispatchToProps = dispatch => {
  return { requestAllMeetups: (cityId) => dispatch(requestAllMeetups(cityId)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(MeetupIndex);
