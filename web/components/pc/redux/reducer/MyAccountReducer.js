/**
 * Created by cshao on 8/22/16.
 */

'use strict';

module.exports = function(state, action) {
  if (state === undefined) {
    state = [];
  }
  switch (action.type) {
    case 'list_item':
      return action.items;
    case 'delete_item':
      return getItemsAfterDelete(state, action.id);
    default:
      return state;
  }
};

function getItemsAfterDelete(list, deleteId) {
  var newItems = [];
  for (var i=0; i<list.length; i++) {
    if (list[i].id !== deleteId) {
      newItems.push(list[i]);
    }
  }
  return newItems;
}
