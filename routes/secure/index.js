/**
 * Created by cshao on 6/12/16.
 */

"use strict";

var express = require('express');
var router = express.Router();

router.get('/my-account', function(req, res) {
  res.send('<h3>my-account page</h3>');
});

module.exports = router;