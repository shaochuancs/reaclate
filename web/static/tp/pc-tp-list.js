/**
 * Created by cshao on 6/12/16.
 */

"use strict";

var commonTP = require('./common-tp-list');

var pcTPLib = ['web/static/bower_components/jquery/dist/jquery.min.js',
               'web/static/bower_components/bootstrap/dist/js/bootstrap.min.js',
               'web/static/bower_components/js-cookie/src/js.cookie.js'];

var pcTPMap = ['web/static/bower_components/jquery/dist/jquery.min.map'];

exports.lib = commonTP.lib.concat(pcTPLib);

exports.map = commonTP.map.concat(pcTPMap);