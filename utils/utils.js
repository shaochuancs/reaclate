/**
 * Created by cshao on 6/12/16.
 */

'use strict';

var WebComponents = require('../web/static/compiled/scripts/pc/isomorphic_components');
var AppComponents = require('../web/static/compiled/scripts/pc/app_components');

// URL
const ENCODING_QUESTION_MARK = '__qm__';
const ENCODING_EQUAL = '__eq__';
const ENCODING_AND = '__and__';
exports.encodeURL = function(url) {
  return url.replace(/\?/g, ENCODING_QUESTION_MARK)
            .replace(/=/g, ENCODING_EQUAL)
            .replace(/&/g, ENCODING_AND);
};
exports.decodeURL = function(encodedUrl) {
  if (!encodedUrl) {
    return null;
  }
  return encodedUrl.replace(new RegExp(ENCODING_QUESTION_MARK, 'g'), '?')
                    .replace(new RegExp(ENCODING_EQUAL, 'g'), '=')
                    .replace(new RegExp(ENCODING_AND, 'g'), '&');
};

// Server Launcher
exports.normalizePort = function(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
};
exports.handleError = function(error, port, messageHandler) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      messageHandler(bind + ' requires elevated privileges', true);
      break;
    case 'EADDRINUSE':
      messageHandler(bind + ' is already in use', true);
      break;
    default:
      throw error;
  }
};

exports.getWebComponents = function() {
  return WebComponents;
};

exports.getAppComponents = function() {
  return AppComponents;
};
