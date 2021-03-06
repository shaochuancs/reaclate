/**
 * Created by cshao on 6/12/16.
 */

'use strict';

var express = require('express');
var router = express.Router();
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var ReactRouter = require('react-router');
var match = ReactRouter.match;

var secure = require('./secure/index');
var api = require('./api/api');
var utils = require('../utils/utils');

router.get('/', function(req, res) {
  res.render('pc/basic/login');
});

router.get('/404', function(req, res) {
  res.render('pc/404');
});

router.get('/login', function (req, res) {
  res.render('pc/basic/login');
});
router.get('/login-flux', function(req, res) {
  res.render('pc/flux/login');
});

var LoginFormFactory = React.createFactory(utils.getWebComponents().LoginFormIsomorphic);
router.get('/login-isomorphic', function(req, res) {
  res.render('pc/isomorphic/login', {
    formHTML: ReactDOMServer.renderToString(LoginFormFactory())
  });
});
router.get('/login-redux', function(req, res) {
  res.render('pc/redux/login');
});
router.get('/login-es6', function(req, res) {
  res.render('pc/es6/login');
});

router.get('/react-router*', function(req, res) {
  res.render('pc/react-router/app');
});

var routes = utils.getAppComponents().routes;
var ServerContext = utils.getAppComponents().ServerContext;
var serverContextFactory = React.createFactory(ServerContext);
router.get('/app*', function(req, res) {
  match({routes: routes, location: req.url}, function(err, redirect, props) {
    res.render('pc/all/app', {
      appHTML: ReactDOMServer.renderToString(serverContextFactory(props))
    });
  });
});

router.use('/secure', secure);
router.use('/api', api);

module.exports = router;
