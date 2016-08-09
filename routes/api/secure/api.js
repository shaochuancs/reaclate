/**
 * Created by cshao on 6/12/16.
 */

"use strict";

const express = require('express');
const router = express.Router();

var utils = require('../../../utils/utils');

router.get('/item-list', function(req, res) {
  res.json([{
    id: 42,
    col1: 'AAA',
    col2: 'BBB',
    col3: 'CCC'
  },{
    id: 43,
    col1: 'MMM',
    col2: 'NNN',
    col3: 'OOO'
  },{
    id: 44,
    col1: 'DDD',
    col2: 'EEE',
    col3: 'FFF'
  },{
    id: 45,
    col1: 'GGG',
    col2: 'HHH',
    col3: 'III'
  }]);
});

router.delete('/item-list/:id', function(req, res) {
  res.status(200).end();
});

module.exports = router;