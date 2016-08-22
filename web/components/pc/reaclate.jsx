"use strict";

var React = require('react');
var ReactDOM = require('react-dom');

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
if (myAccountReduxEle) {
  ReactDOM.render(<MyAccountRedux/>, myAccountReduxEle);
}