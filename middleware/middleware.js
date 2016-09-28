/**
 * Created by cshao on 6/12/16.
 */

"use strict";

const debugServer = require('debug')('reaclate:server');
const util = require('util');
const utils = require('../utils/utils');

exports.notFoundHandler = function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
};

var handleError = function(isDev, err, req, res) {
  debugServer('------------Error!------------');
  debugServer(util.inspect(err));
  var errorObj = {};
  if (isDev) {
    errorObj = err;
    debugServer(err.stack);
  }
  if (err.status === 401 && !req.path.includes('/api/')) {
    var redirectUrl = utils.encodeURL(req.originalUrl);
    if (req.path.startsWith('/m/')) {
      res.redirect('/m/login?redirectUrl=' + redirectUrl);
    } else {
      res.redirect('/login?redirectUrl=' + redirectUrl);
    }
    return;
  }

  if (err.status === 404) {
    res.redirect('/404');
    return;
  }

  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: errorObj
  });
};
exports.devErrorHandler = function(err, req, res, next) {
  handleError(true, err, req, res);
};
exports.prodErrorHandler = function(err, req, res, next) {
  handleError(false, err, req, res);
};