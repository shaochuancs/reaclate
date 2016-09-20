/**
 * Created by cshao on 8/25/16.
 */

"use strict";

const relativeToRoot = '../../../';
const actionCreator_file = relativeToRoot + require(relativeToRoot + 'tests').app_path + '/action/AccountActionCreator';

const AccountActionCreator = require(actionCreator_file);

describe('Test account actions', () => {
  test('test login action', () => {
    const sampleEmail = 'test@gmail.com';
    const action = AccountActionCreator.loginAction(sampleEmail);

    expect(action.type).toBe('login');
    expect(action.email).toBe(sampleEmail);
  });
});