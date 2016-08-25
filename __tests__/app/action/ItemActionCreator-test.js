/**
 * Created by cshao on 8/25/16.
 */

"use strict";

var relativeToRoot = '../../../';
var actionCreator_file = relativeToRoot + require(relativeToRoot + 'tests').app_path + '/action/ItemActionCreator';

jest.dontMock(actionCreator_file);

var ItemActionCreator = require(actionCreator_file);

describe('Test item actions', function() {
  it('test list item action', function() {
    var sampleItems = [42, 88];
    var action = ItemActionCreator.listItemAction(sampleItems);

    expect(action.type).toEqual('list_item');
    expect(action.items).toEqual(sampleItems);
  });

  it('test delete item action', function() {
    var sampleId = 29;
    var action = ItemActionCreator.deleteItemAction(sampleId);

    expect(action.type).toEqual('delete_item');
    expect(action.id).toEqual(sampleId);
  });
});