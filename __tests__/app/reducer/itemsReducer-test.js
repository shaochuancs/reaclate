/**
 * Created by cshao on 8/25/16.
 */

"use strict";

var relativeToRoot = '../../../';
var reducer_file = relativeToRoot + require(relativeToRoot + 'tests').app_path + '/reducer/itemsReducer';

jest.dontMock(reducer_file);

var reducer = require(reducer_file).default;

describe('Test items reducer', function() {
  it('test reducer on list action', function() {
    var reduceResult = reducer([{id:1, val:29}, {id:2, val:88}], {type: 'list_item', items: [{id:3, val:129}, {id:4, val:818}]});
    expect(reduceResult).toEqual([{id:3, val:129}, {id:4, val:818}]);
  });

  it('test reducer on delete action', function() {
    var reduceResult = reducer([{id:13, val:1329}, {id:14, val:1818}], {type: 'delete_item', id: 13});
    expect(reduceResult).toEqual([{id:14, val:1818}]);
  });
});