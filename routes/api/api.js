/**
 * Created by cshao on 6/12/16.
 */

"use strict";

const express = require('express');
const router = express.Router();

var secureAPI = require('./secure/api');

router.post('/login', function(req, res) {
  res.end();
});

router.use('/secure', secureAPI);

module.exports = router;