/**
 * Created by cshao on 8/25/16.
 */

"use strict";

var relativeToRoot = '../../../';
var reducer_file = relativeToRoot + require(relativeToRoot + 'tests').app_path + '/reducer/emailReducer';

jest.dontMock(reducer_file);

var reducer = require(reducer_file).default;

describe('Test email reducer', function() {
  it('test reducer on login action', function() {
    var reduceResult = reducer('origin@gmail.com', {type: 'login', email: 'test@gmail.com'});
    expect(reduceResult).toEqual('test@gmail.com');
  });
});