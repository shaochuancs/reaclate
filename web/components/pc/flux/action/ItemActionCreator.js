/**
 * Created by cshao on 8/8/16.
 */

"use strict";

var AppDispatcher = require('../dispatcher/AppDispatcher');

function listItem(items) {
  var action = {
    type: 'list_item',
    items: items
  };
  AppDispatcher.dispatch(action);
}

function deleteItem(id) {
  var action = {
    type: 'delete_item',
    id: id
  };
  AppDispatcher.dispatch(action);
}

module.exports = {
  listItem: listItem,
  deleteItem: deleteItem
};