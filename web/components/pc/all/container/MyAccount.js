/**
 * Created by cshao on 8/24/16.
 */

"use strict";

var connect = require('react-redux').connect;
var MyAccount = require('../components/MyAccount');

module.exports = connect()(MyAccount);