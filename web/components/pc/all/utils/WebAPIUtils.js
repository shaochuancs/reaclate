/**
 * Created by cshao on 8/9/16.
 */

"use strict";

import api from '../../../common/api';

function listItem(callback) {
  $.get(api.ITEM_LIST, (data) => callback(data));
}

function deleteItem(id, callback) {
  $.ajax(api.ITEM_LIST+'/'+id, {
    method: 'DELETE'
  }).done(() => callback(id));
}

function login(param, callback) {
  $.post(api.LOGIN, param, () => callback());
}

export {listItem, deleteItem, login};