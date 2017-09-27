import { connect } from 'react-redux';
import UserShow from './user_show';
import { requestSingleUser } from '../../actions/user_actions';
import { selectAllUsers } from '../../reducers/selectors';


const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    thisPageUser: state.entities.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestSingleUser: (userId) => dispatch(requestSingleUser(userId))
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(UserShow);
