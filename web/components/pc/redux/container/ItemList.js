/**
 * Created by cshao on 8/22/16.
 */

"use strict";

var connect = require('react-redux').connect;
var ItemActionCreator = require('../action/ItemActionCreator');
var ItemList = require('../components/ItemList');
var WebAPIUtils = require('../utils/WebAPIUtils');

function mapStateToProps(state) {
  return {
    data: state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    initList: function() {
      WebAPIUtils.listItem(function(data) {
        dispatch(ItemActionCreator.listItem(data));
      });
    },
    handleDeleteData: function(id) {
      WebAPIUtils.deleteItem(id, function(id) {
        dispatch(ItemActionCreator.deleteItem(id));
      });
    }
  };
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(ItemList);