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
const nunjucks = require('nunjucks');
const moreRelative = require('nunjucks-more-relative');
moreRelative(nunjucks);

const middleware = require('./middleware/middleware');
const utils = require('./utils/utils');
const routes = require('./routes/index');

const isProdMode = process.env.NODE_ENV === 'production';

global.Cookies = null;

var app = express();

var nunjucksConf = {
  express: app
};
if (!isProdMode) {
  nunjucksConf.watch = true;
  nunjucksConf.noCache = true;
}
nunjucks.configure([path.join(__dirname, 'web/static/compiled/views')], nunjucksConf);
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
};

module.exports = app;
