/**
 * Created by cshao on 6/12/16.
 */

"use strict";

var express = require('express');
var router = express.Router();

router.get('/my-account', function(req, res) {
  res.render('pc/basic/my-account');
});
router.get('/my-account-flux', function(req, res) {
  res.render('pc/flux/my-account');
});

module.exports = router;