/**
 * Created by cshao on 8/22/16.
 */

"use strict";

var combineReducers = require('redux').combineReducers;

var email = require('./emailReducer');
var items = require('./itemsReducer');

module.exports = combineReducers({email, items});