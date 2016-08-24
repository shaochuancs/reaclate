/**
 * Created by cshao on 8/24/16.
 */

"use strict";

var React = require('react');
var ReactRouter = require('react-router');
var Provider = require('react-redux').Provider;
var createStore = require('redux').createStore;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var RouterContext = ReactRouter.RouterContext;

var LoginApp = require('./container/Login');
var MyAccountApp = require('./container/MyAccount');
function requireAppAuth(nextState, replace) {
  if (Cookies && !Cookies.get('token')) {
    replace('/app/login');
  }
}

var appReducer = require('./reducer/appReducer');
var appStore = createStore(appReducer);
module.exports = {
  routes: (
    <Route path="/app">
      <IndexRoute component={LoginApp}/>
      <Route path="login" component={LoginApp} />
      <Route path="my-account" component={MyAccountApp} onEnter={requireAppAuth} />
    </Route>
  ),
  ServerContext: React.createClass({
    render: function() {
      return (
        <Provider store={appStore}>
          <RouterContext {...this.props} />
        </Provider>
      );
    }
  })
};