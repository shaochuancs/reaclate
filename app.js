/**
 * Created by cshao on 6/5/16.
 */

const debugServer = require('debug')('reaclate:server');
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const compress = require('compression');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const swig = require('swig');

const middleware = require('./middleware/middleware');
const utils = require('./utils/utils');
const routes = require('./routes/index');

var app = express();

app.engine('html', swig.renderFile);

// view engine setup
app.set('views', [path.join(__dirname, 'web/static/compiled/views')]);
app.set('view engine', 'html');

app.use(compress());
app.use(favicon(__dirname + '/web/static/images/common/favicon.ico'));
app.use(logger('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.configRoute = function(secret) {
  app.use('/', routes);

  app.use('/static', express.static(path.join(__dirname, 'web/static'), {'extensions': ['html', 'js', 'css'], 'maxAge': '7d'}));
};

app.configErrorHandler = function(isProdMode) {
  // catch 404 and forward to error handler
  app.use(middleware.notFoundHandler);

  if (isProdMode) {
    app.use(middleware.prodErrorHandler);
  } else {
    app.use(middleware.devErrorHandler);
  }
};

app.configTemplate = function(isProdMode) {
  app.set('view cache', isProdMode ? true : false);

  // Override default open/close tag, which conflicts with some frontend framework, such as AngularJS
  swig.setDefaults({
    cache: isProdMode ? 'memory' : false,
    varControls: ['{=', '=}']
  });
};

module.exports = app;
