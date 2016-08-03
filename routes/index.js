/**
 * Created by cshao on 6/12/16.
 */

"use strict";

var express = require('express');
var router = express.Router();

var secure = require('./secure/index');
var api = require('./api/api');

router.get('/', function(req, res) {
  res.render('pc/login');
});

router.get('/404', function(req, res) {
  res.render('pc/404');
});

router.get('/login', function (req, res) {
  res.render('pc/login');
});

router.use('/secure', secure);
router.use('/api', api);

module.exports = router;