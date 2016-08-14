/**
 * Created by cshao on 6/12/16.
 */

"use strict";

var express = require('express');
var router = express.Router();
var React = require('react');
var ReactDOMServer = require('react-dom/server');

var secure = require('./secure/index');
var api = require('./api/api');
var utils = require('../utils/utils');

var LoginFormFactory = React.createFactory(utils.getWebComponents().LoginFormIsomorphic);

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

router.get('/login-isomorphic', function(req, res) {
  res.render('pc/isomorphic/login', {
    formHTML: ReactDOMServer.renderToString(LoginFormFactory())
  });
});

router.use('/secure', secure);
router.use('/api', api);

module.exports = router;