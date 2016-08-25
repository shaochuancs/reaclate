/**
 * Created by cshao on 8/25/16.
 */

"use strict";

var relativeToRoot = '../../../';
var actionCreator_file = relativeToRoot + require(relativeToRoot + 'tests').app_path + '/action/AccountActionCreator';

jest.dontMock(actionCreator_file);

var AccountActionCreator = require(actionCreator_file);

describe('Test account actions', function() {
  it('test login action', function() {
    var sampleEmail = 'test@gmail.com';
    var action = AccountActionCreator.loginAction(sampleEmail);

    expect(action.type).toEqual('login');
    expect(action.email).toEqual(sampleEmail);
  });
});