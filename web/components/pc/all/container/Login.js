/**
 * Created by cshao on 8/24/16.
 */

"use strict";

var connect = require('react-redux').connect;
var browserHistory = require('react-router').browserHistory;
var AccountActionCreator = require('../action/AccountActionCreator');
var Login = require('../components/Login');
var WebAPIUtils = require('../utils/WebAPIUtils');

function mapDispatchToProps(dispatch) {
  return {
    login: function(param) {
      WebAPIUtils.login(param, function() {
        dispatch(AccountActionCreator.login(param.email));
        browserHistory.push('/app/my-account');
      });
    }
  };
}

module.exports = connect(null, mapDispatchToProps)(Login);