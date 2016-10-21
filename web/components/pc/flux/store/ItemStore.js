/**
 * Created by cshao on 8/8/16.
 */

'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var EVENT_CHANGE = 'change';

var items = [];

function setItems(receivedItems) {
  items = receivedItems;
}
function deleteItem(itemId) {
  for (var i=0; i<items.length; i++) {
    if (items[i].id === itemId) {
      items.splice(i, 1);
      break;
    }
  }
}

function emitChange() {
  ItemStore.emit(EVENT_CHANGE);
}

var ItemStore = assign({}, EventEmitter.prototype, {
  addChangeListener: function(callback) {
    this.on(EVENT_CHANGE, callback);
  },
  removeChangeListener: function(callback) {
    this.removeListener(EVENT_CHANGE, callback);
  },
  getItems: function() {
    return items;
  }
});

function handleAction(action) {
  if (action.type === 'list_item') {
    setItems(action.items);
  } else if (action.type === 'delete_item') {
    deleteItem(action.id);
  }
  emitChange();
}

ItemStore.dispatchToken = AppDispatcher.register(handleAction);

module.exports = ItemStore;
