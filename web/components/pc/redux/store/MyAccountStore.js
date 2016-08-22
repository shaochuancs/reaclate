/**
 * Created by cshao on 8/22/16.
 */

"use strict";

var createStore = require('redux').createStore;
var myAccountReducer = require('../reducer/MyAccountReducer');
var myAccountStore = createStore(myAccountReducer, []);

module.exports = myAccountStore;