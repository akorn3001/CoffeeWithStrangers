import { connect } from 'react-redux';
import CityShow from './city_show';
import { changeUserCity, updateSingleUser } from '../../actions/user_actions';
import { requestAllCityMeetups } from '../../actions/meetup_actions';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return  ({
    // changeUserCity: (userId, cityId) => dispatch(changeUserCity(userId, cityId)),
             changeUserCity: (cityId) => dispatch(updateSingleUser({ user: { city_id: cityId }})),
             requestAllCityMeetups: (cityId) => dispatch(requestAllCityMeetups(cityId))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(CityShow);
