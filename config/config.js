/**
 * Created by cshao on 6/5/16.
 */

"use strict";

const debugServer = require('debug')('reaclate:server');
const properties = require('properties');

var options = {
  path: true,
  sections: true
};

exports.load = function(callback) {
  properties.parse(__dirname + '/config.properties', options, function(error, obj) {
    if (error) {
      return debugServer(error);
    }

    callback(obj);
  });
};