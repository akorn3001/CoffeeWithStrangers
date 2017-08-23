// import React from 'react';
// import { Provider } from 'react-redux';
// import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
//
// const App = () => {
//   return (
//     <div>Coffee With Strangers</div>
//   );
// };
//
// export default App;
//
//

import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => {
  return (
      <div>
        <header>
          <h1>Coffee With Strangersss</h1>
          <GreetingContainer />
        </header>

        <AuthRoute path='/login' exact component={LoginFormContainer} />
        <AuthRoute path='/signup' exact component={SignupFormContainer} />

        <footer>STUFF TO COME</footer>
      </div>

  );
};

export default App;
