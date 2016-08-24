/**
 * Created by cshao on 8/24/16.
 */

"use strict";

import React from 'react';
import {Route, IndexRoute, RouterContext} from 'react-router';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import LoginApp from './container/Login';
import MyAccountApp from './container/MyAccount';
import appReducer from './reducer/appReducer';

function requireAppAuth(nextState, replace) {
  if (Cookies && !Cookies.get('token')) {
    replace('/app/login');
  }
}

let appStore = createStore(appReducer);
let routes = (
  <Route path="/app">
    <IndexRoute component={LoginApp}/>
    <Route path="login" component={LoginApp} />
    <Route path="my-account" component={MyAccountApp} onEnter={requireAppAuth} />
  </Route>
);
class ServerContext extends React.Component {
  render() {
    return (
      <Provider store={appStore}>
        <RouterContext {...this.props} />
      </Provider>
    );
  }
}

export {routes, ServerContext};