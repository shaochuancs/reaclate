/**
 * Created by cshao on 8/9/16.
 */

"use strict";

var api = require('../../../common/api');

function listItem(callback) {
  $.get(api.ITEM_LIST, function(data) {
    callback(data);
  });
}

function deleteItem(id, callback) {
  $.ajax(api.ITEM_LIST+'/'+id, {
    method: 'DELETE'
  }).done(function() {
    callback(id);
  });
}

function login(param, callback) {
  $.post(api.LOGIN, param, function() {
    callback();
  });
}

module.exports = {
  listItem: listItem,
  deleteItem: deleteItem,
  login: login
};