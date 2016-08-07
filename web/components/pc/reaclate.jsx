"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var LoginForm = require('./LoginForm');
var MyAccount = require('./MyAccount');

var loginFormEle = document.getElementById('login-form');
var myAccountEle = document.getElementById('my-account');

if (loginFormEle) {
  ReactDOM.render(<LoginForm redirect-url="/secure/my-account" />, loginFormEle);
}
if (myAccountEle) {
  ReactDOM.render(<MyAccount/>, myAccountEle);
}