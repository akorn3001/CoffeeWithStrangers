import { connect } from 'react-redux';
import CityShow from './city_show';
import { changeCity } from '../../actions/user_actions';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    // city: state.entities.cities[state.session.currentUser.city_id]

  };
};

const mapDispatchToProps = (dispatch) => {
  return  ({
    changeCity: (user) => dispatch(changeCity(user))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(CityShow);


// city: state.entities.cities[state.session.currentUser.city_id]
