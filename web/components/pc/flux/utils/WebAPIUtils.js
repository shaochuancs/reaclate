/**
 * Created by cshao on 8/9/16.
 */

"use strict";

var api = require('../../../common/api');
var ItemActionCreator = require('../action/ItemActionCreator');

function listItem() {
  $.get(api.ITEM_LIST, function(data) {
    ItemActionCreator.listItem(data);
  });
}

function deleteItem(id) {
  $.ajax(api.ITEM_LIST+'/'+id, {
    method: 'DELETE'
  }).done(function() {
    ItemActionCreator.deleteItem(id);
  });
}

module.exports = {
  listItem: listItem,
  deleteItem: deleteItem
};