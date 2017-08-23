import { connect } from 'react-redux';
import Header from './header';
// import { logout } from '../../actions/session_actions';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    // city: state.entities.cities[state.session.currentUser.city_id]
  };
};

export default connect(mapStateToProps, null)(Header);
