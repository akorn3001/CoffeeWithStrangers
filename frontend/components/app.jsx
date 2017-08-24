import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import HeaderContainer from './header/header_container';
import Footer from './footer/footer';
import CitiesContainer from './cities/cities_container';

const App = () => {
  return (
      <div>
        <HeaderContainer />

        <ProtectedRoute path="/cities" exact component={CitiesContainer}/>
        <AuthRoute path='/login' exact component={LoginFormContainer} />
        <AuthRoute path='/signup' exact component={SignupFormContainer} />

        <Footer />
      </div>

  );
};

export default App;
