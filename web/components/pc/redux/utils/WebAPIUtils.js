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

module.exports = {
  listItem: listItem,
  deleteItem: deleteItem
};