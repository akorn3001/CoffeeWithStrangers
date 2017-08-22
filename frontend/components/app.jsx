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
import { Route } from 'react-router-dom';
import SessionFormContainer from './session/session_form_container';
import { AuthRoute } from '../util/route_util';

const App = () => {
  return (
    <div>
      <header>
        <h1>Coffee With Strangersss</h1>
        <GreetingContainer />
      </header>

      <AuthRoute path='/login' component={SessionFormContainer} />
      <AuthRoute path='/signup' component={SessionFormContainer} />
    </div>
  );
};

export default App;
