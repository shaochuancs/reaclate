/**
 * Created by cshao on 6/12/16.
 */

"use strict";

var express = require('express');
var router = express.Router();
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var utils = require('../../utils/utils');

var MyAccountFactory = React.createFactory(utils.getWebComponents().MyAccountIsomorphic);

router.get('/my-account', function(req, res) {
  res.render('pc/basic/my-account');
});
router.get('/my-account-flux', function(req, res) {
  res.render('pc/flux/my-account');
});
router.get('/my-account-isomorphic', function(req, res) {
  //Simulate data achievement
  setTimeout(function() {
    var props = {
      initListData: [{
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
      }]
    };
    res.render('pc/isomorphic/my-account', {
      accountHTML: ReactDOMServer.renderToString(MyAccountFactory(props)),
      initScript: '<script type="text/javascript">window.initProps=' + JSON.stringify(props) + '</script>'
    });
  }, 100);
});
router.get('/my-account-redux', function(req, res) {
  res.render('pc/redux/my-account');
});

module.exports = router;