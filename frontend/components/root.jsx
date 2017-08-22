import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <HashRouter>
        <div>Coffee With Strangers</div>
      </HashRouter>
    </Provider>
  )
};

export default Root;
