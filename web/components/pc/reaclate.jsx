"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var Provider = require('react-redux').Provider;
var createStore = require('redux').createStore;
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var browserHistory = ReactRouter.browserHistory;
require('babel-polyfill');

// basic
var LoginForm = require('./basic/LoginForm');
var MyAccount = require('./basic/MyAccount');
var loginFormEle = document.getElementById('login-form');
var myAccountEle = document.getElementById('my-account');
if (loginFormEle) {
  ReactDOM.render(<LoginForm redirect-url="/secure/my-account" />, loginFormEle);
}
if (myAccountEle) {
  ReactDOM.render(<MyAccount/>, myAccountEle);
}

// flux
var LoginFormFlux = require('./flux/LoginForm');
var MyAccountFlux = require('./flux/MyAccount');
var loginFormFluxEle = document.getElementById('login-form-flux');
var myAccountFluxEle = document.getElementById('my-account-flux');
if (loginFormFluxEle) {
  ReactDOM.render(<LoginFormFlux redirect-url="/secure/my-account-flux" />, loginFormFluxEle);
}
if (myAccountFluxEle) {
  ReactDOM.render(<MyAccountFlux/>, myAccountFluxEle);
}

// isomorphic
var LoginFormIsomorphic = require('./isomorphic/LoginForm');
var MyAccountIsomorphic = require('./isomorphic/MyAccount');
var loginFormIsomorphicEle = document.getElementById('login-form-isomorphic');
var myAccountIsomorphicEle = document.getElementById('my-account-isomorphic');
if (loginFormIsomorphicEle) {
  ReactDOM.render(<LoginFormIsomorphic redirect-url="/secure/my-account-isomorphic" />, loginFormIsomorphicEle);
}
if (myAccountIsomorphicEle) {
  ReactDOM.render(<MyAccountIsomorphic/>, myAccountIsomorphicEle);
}

// redux
var LoginFormRedux = require('./redux/components/LoginForm');
var MyAccountRedux = require('./redux/components/MyAccount');
var loginFormReduxEle = document.getElementById('login-form-redux');
var myAccountReduxEle = document.getElementById('my-account-redux');
if (loginFormReduxEle) {
  ReactDOM.render(<LoginFormRedux redirect-url="/secure/my-account-redux" />, loginFormReduxEle);
}
var myAccountReducer = require('./redux/reducer/MyAccountReducer');
var myAccountStore = createStore(myAccountReducer);
// Use below code if redux-devtool chrome extension is activated.
// var myAccountStore = createStore(myAccountReducer, window.devToolsExtension && window.devToolsExtension());
if (myAccountReduxEle) {
  ReactDOM.render(
    <Provider store={myAccountStore}>
      <MyAccountRedux/>
    </Provider>,
    myAccountReduxEle);
}

// react-router
var LoginReactRouter = require('./react-router/Login');
var MyAccountReactRouter = require('./react-router/MyAccount');
var reactRouterAppEle = document.getElementById('react-router');
function requireAuth(nextState, replace) {
  if (Cookies && !Cookies.get('token')) {
    replace('/react-router/login');
  }
}
if (reactRouterAppEle) {
  ReactDOM.render(
    <Router history={browserHistory}>
      <Route path="/react-router">
        <IndexRoute component={LoginReactRouter} />
        <Route path="login" component={LoginReactRouter} />
        <Route path="my-account" component={MyAccountReactRouter} onEnter={requireAuth} />
      </Route>
    </Router>,
    reactRouterAppEle
  );
}

// ES6
import LoginFormES6 from './es6/LoginForm';
import MyAccountES6 from './es6/MyAccount';
let loginFormES6Ele = document.getElementById('login-form-es6');
let myAccountES6Ele = document.getElementById('my-account-es6');
if (loginFormES6Ele) {
  ReactDOM.render(<LoginFormES6 redirect-url="/secure/my-account-es6" />, loginFormES6Ele);
}
if (myAccountES6Ele) {
  ReactDOM.render(<MyAccountES6/>, myAccountES6Ele);
}

// App using redux, react-router, isomorphic and ES6
var appEle = document.getElementById('app');
var appReducer = require('./all/reducer/appReducer');
var appStore = createStore(appReducer);
// Use below code if redux-devtool chrome extension is activated.
// var appStore = createStore(appReducer, window.devToolsExtension && window.devToolsExtension());
var routes = require('./all/routes').routes;
if (appEle) {
  ReactDOM.render(
    <Provider store={appStore}>
      <Router routes={routes} history={browserHistory}>
      </Router>
    </Provider>,
    appEle);
}