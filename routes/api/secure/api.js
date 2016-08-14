/**
 * Created by cshao on 6/12/16.
 */

"use strict";

const express = require('express');
const router = express.Router();

var utils = require('../../../utils/utils');

router.get('/item-list', function(req, res) {
  if (req.query.page == 2) {
    res.json([{
      id: 42,
      col1: '2A32',
      col2: '2B44',
      col3: '2C898'
    },{
      id: 43,
      col1: '2M009',
      col2: '2N09',
      col3: '2O123'
    },{
      id: 44,
      col1: '2D3',
      col2: '2E5561',
      col3: '2oopo'
    },{
      id: 45,
      col1: '2G00p1',
      col2: '2Hm',
      col3: '2I01'
    }]);
  } else {
    res.json([{
      id: 12,
      col1: '1AAA',
      col2: '1BBB',
      col3: '1CCC'
    },{
      id: 13,
      col1: '1MMM',
      col2: '1NNN',
      col3: '1OOO'
    },{
      id: 14,
      col1: '1DDD',
      col2: '1EEE',
      col3: '1FFF'
    },{
      id: 15,
      col1: '1GGG',
      col2: '1HHH',
      col3: '1III'
    }]);
  }
});

router.delete('/item-list/:id', function(req, res) {
  res.status(200).end();
});

module.exports = router;