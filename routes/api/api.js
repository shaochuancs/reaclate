/**
 * Created by cshao on 6/12/16.
 */

"use strict";

const express = require('express');
const router = express.Router();

var secureAPI = require('./secure/api');

router.post('/login', function(req, res) {
  res.cookie('token', 'sample_token', { maxAge: 900000 }); // simulate write-token if login success
  res.end();
});

router.use('/secure', secureAPI);

module.exports = router;