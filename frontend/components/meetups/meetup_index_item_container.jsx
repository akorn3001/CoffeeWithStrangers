import { connect } from 'react-redux';
import MeetupIndexItem from './meetup_index_item';
// import { withRouter } from 'react-router-dom';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser
  };
};

// const mapDispatchToProps = dispatch => {
//   return  {
//
//   };
// };


export default connect(mapStateToProps, null)(MeetupIndexItem);
