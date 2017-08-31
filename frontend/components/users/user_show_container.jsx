import { connect } from 'react-redux';
import UserShow from './user_show';
import { requestSingleUser } from '../../actions/user_actions';
import { selectAllUsers } from '../../reducers/selectors';


const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    // thisPageUser: selectAllUsers(state).slice(-1)[0]
    thisPageUser: state.entities.users
  };
};

const mapDispatchToProps = state => {
  return {
    requestSingleUser: (userId) => dispatch(requestSingleUser(userId))
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(UserShow);
