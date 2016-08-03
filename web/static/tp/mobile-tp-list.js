/**
 * Created by cshao on 6/12/16.
 */

"use strict";

var commonTP = require('./common-tp-list');

var mobileTPLib = [];
var mobileTPMap = [];

exports.lib = commonTP.lib.concat(mobileTPLib);

exports.map = commonTP.map.concat(mobileTPMap);