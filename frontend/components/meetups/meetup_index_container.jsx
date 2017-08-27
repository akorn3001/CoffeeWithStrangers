import { connect } from 'react-redux';
import MeetupIndex from './meetup_index';
import { requestAllMeetups } from '../../actions/meetup_actions';
import { selectAllMeetups } from '../../reducers/selectors';

const mapStateToProps = state => {
  return { meetups: selectAllMeetups(state) };

};

const mapDispatchToProps = dispatch => {
  return { requestAllMeetups: () => dispatch(requestAllMeetups()) };
};

export default connect(mapStateToProps, mapDispatchToProps)(MeetupIndex);
