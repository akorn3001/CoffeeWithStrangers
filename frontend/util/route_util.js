import React from 'react';
import { Redirect, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


// renders component if logged out, otherwise redirects to the root url

const Auth = ({component: Component, path, loggedIn, currentUser}) => (
  <Route path={path} render={(props) => {
      if (!loggedIn) {
        return ( <Component {...props}/> )
      } else if (currentUser.city_id) {
        return ( <Redirect to={`/cities/${currentUser.city_id}`} /> )
      } else {
        return ( <Redirect to="/cities" />)
      }
  }}/>
);

// renders component if logged in, otherwise redirects to the login page
const Protected = ({component: Component, path, loggedIn}) => (
  <Route path={path} render={(props) => (
     loggedIn ? (
      <Component {...props}/>
    ) : (
      <Redirect to="/login"/>
    )
  )}/>
);

// access the Redux state to check if the user is logged in
const mapStateToProps = state => {
  return {loggedIn: Boolean(state.session.currentUser),
          currentUser: state.session.currentUser};
}

// connect Auth to the redux state
export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));

// connect Protected to the redux state
export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));
