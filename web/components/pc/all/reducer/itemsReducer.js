/**
 * Created by cshao on 8/24/16.
 */

'use strict';

function itemsReducer(state = [], action) {
  switch (action.type) {
    case 'list_item':
      return action.items;
    case 'delete_item':
      return getItemsAfterDelete(state, action.id);
    default:
      return state;
  }
}

function getItemsAfterDelete(list, deleteId) {
  var newItems = [];
  for (let i=0; i<list.length; i++) {
    if (list[i].id !== deleteId) {
      newItems.push(list[i]);
    }
  }
  return newItems;
}

export default itemsReducer;
