"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var LoginForm = require('./basic/LoginForm');
var MyAccount = require('./basic/MyAccount');
var LoginFormFlux = require('./flux/LoginForm');
var MyAccountFlux = require('./flux/MyAccount');
var LoginFormIsomorphic = require('./isomorphic/LoginForm');
var MyAccountIsomorphic = require('./isomorphic/MyAccount');

var loginFormEle = document.getElementById('login-form');
var myAccountEle = document.getElementById('my-account');
var loginFormFluxEle = document.getElementById('login-form-flux');
var myAccountFluxEle = document.getElementById('my-account-flux');
var loginFormIsomorphicEle = document.getElementById('login-form-isomorphic');
var myAccountIsomorphicEle = document.getElementById('my-account-isomorphic');

if (loginFormEle) {
  ReactDOM.render(<LoginForm redirect-url="/secure/my-account" />, loginFormEle);
}
if (myAccountEle) {
  ReactDOM.render(<MyAccount/>, myAccountEle);
}
if (loginFormFluxEle) {
  ReactDOM.render(<LoginFormFlux redirect-url="/secure/my-account-flux" />, loginFormFluxEle);
}
if (myAccountFluxEle) {
  ReactDOM.render(<MyAccountFlux/>, myAccountFluxEle);
}
if (loginFormIsomorphicEle) {
  ReactDOM.render(<LoginFormIsomorphic redirect-url="/secure/my-account-isomorphic" />, loginFormIsomorphicEle);
}
if (myAccountIsomorphicEle) {
  ReactDOM.render(<MyAccountIsomorphic/>, myAccountIsomorphicEle);
}