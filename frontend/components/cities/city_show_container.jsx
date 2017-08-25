import { connect } from 'react-redux';
import CityShow from './city_show';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    // userCity: state.entities.cities[state.session.currentUser.city_id]

  };
};




export default connect(mapStateToProps, null)(CityShow);


// city: state.entities.cities[state.session.currentUser.city_id]
