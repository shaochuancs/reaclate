/**
 * Created by cshao on 8/19/16.
 */

"use strict";

function listItemAction(items) {
  return {
    type: 'list_item',
    items: items
  };
}

function deleteItemAction(id) {
  return {
    type: 'delete_item',
    id: id
  };
}

export {listItemAction, deleteItemAction};