import { connect } from 'react-redux';
import Cities from './cities';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    // city: state.entities.cities[state.session.currentUser.city_id]
  };
};
//
// const mapDispatchToProps = dispatch => {
//   return  {
//
//   };
// };


export default connect(mapStateToProps, null)(Cities);
