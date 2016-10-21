/**
 * Created by cshao on 8/25/16.
 */

'use strict';

const relativeToRoot = '../../../';
const reducer_file = relativeToRoot + require(relativeToRoot + 'tests').app_path + '/reducer/emailReducer';

const reducer = require(reducer_file).default;

describe('Test email reducer', () => {
  it('should return correct email on login action', () => {
    const reduceResult = reducer('origin@gmail.com', {type: 'login', email: 'test@gmail.com'});
    expect(reduceResult).toBe('test@gmail.com');
  });
});
