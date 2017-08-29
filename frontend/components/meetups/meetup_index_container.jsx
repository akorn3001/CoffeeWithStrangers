import { connect } from 'react-redux';
import MeetupIndex from './meetup_index';
import { requestAllCityMeetups, requestAllUserMeetups } from '../../actions/meetup_actions';
import { selectAllMeetups } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  return { meetups: selectAllMeetups(state)};
  // city: state.entities.cities[state.session.currentUser.city_id]
};

const mapDispatchToProps = dispatch => {
  return { requestAllCityMeetups: (cityId) => dispatch(requestAllCityMeetups(cityId))};
};

export default connect(mapStateToProps, mapDispatchToProps)(MeetupIndex);
