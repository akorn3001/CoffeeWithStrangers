import { connect } from 'react-redux';
import CityShow from './city_show';
import { changeUserCity } from '../../actions/session_actions';
import { requestAllMeetups } from '../../actions/meetup_actions';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    // city: state.entities.cities[state.session.currentUser.city_id]

  };
};

const mapDispatchToProps = (dispatch) => {
  return  ({ changeUserCity: (userId, cityId) => dispatch(changeUserCity(userId, cityId)),
             requestAllMeetups: (cityId) => dispatch(requestAllMeetups(cityId))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(CityShow);


// city: state.entities.cities[state.session.currentUser.city_id]
