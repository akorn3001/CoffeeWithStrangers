import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import HeaderContainer from './header/header_container';
import Footer from './footer/footer';
import CitiesContainer from './cities/cities_container';
import CityShowContainer from './cities/city_show_container';
import About from './about_page';
import DashboardContainer from './dashboard/dashboard_container';
import Hosting from './hosting/hosting';


const App = () => {
  return (
      <div>
        <HeaderContainer />

        <Switch>
          <Route path={`/cities/:cityId`} exact component={CityShowContainer}/>
          <Route path="/cities" component={CitiesContainer}/>
        </Switch>

        <Route path="/hosting" component={Hosting}/>
        <Route path="/about" component={About}/>
        <ProtectedRoute path="/profile" component={DashboardContainer}/>


        <AuthRoute path='/login' exact component={LoginFormContainer} />
        <AuthRoute path='/signup' exact component={SignupFormContainer} />
        <Footer />
      </div>

  );
};

export default App;
