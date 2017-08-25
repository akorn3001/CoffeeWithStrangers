import { connect } from 'react-redux';
import Header from './header';
import { logout } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    // city: state.entities.cities[state.session.currentUser.city_id]
  };
};

const mapDispatchToProps = dispatch => {
  return  {
    logout: () => dispatch(logout())
  };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
