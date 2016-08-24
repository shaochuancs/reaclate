/**
 * Created by cshao on 8/19/16.
 */

"use strict";

function listItem(items) {
  return {
    type: 'list_item',
    items: items
  };
}

function deleteItem(id) {
  return {
    type: 'delete_item',
    id: id
  };
}

module.exports = {
  listItem: listItem,
  deleteItem: deleteItem
};