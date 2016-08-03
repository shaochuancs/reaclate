"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var LoginForm = require('./LoginForm');

var loginFormEle = document.getElementById('login-form');

if (loginFormEle) {
  ReactDOM.render(<LoginForm redirect-url="/secure/my-account" />, loginFormEle);
}