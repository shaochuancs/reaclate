/**
 * Created by cshao on 8/25/16.
 */

"use strict";

const relativeToRoot = '../../../';
const actionCreator_file = relativeToRoot + require(relativeToRoot + 'tests').app_path + '/action/ItemActionCreator';

const ItemActionCreator = require(actionCreator_file);

describe('Test item actions', () => {
  it('should create correct list item action', () => {
    const sampleItems = [42, 88];
    const action = ItemActionCreator.listItemAction(sampleItems);

    expect(action.type).toBe('list_item');
    expect(action.items).toBe(sampleItems);
  });

  it('should create correct delete item action', () => {
    const sampleId = 29;
    const action = ItemActionCreator.deleteItemAction(sampleId);

    expect(action.type).toBe('delete_item');
    expect(action.id).toBe(sampleId);
  });
});