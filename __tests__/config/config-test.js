/**
 * Created by cshao on 9/20/16.
 */

'use strict';

const relativeToRoot = '../../';
const config_file = relativeToRoot + require(relativeToRoot + 'tests').config_path + '/config';

const config = require(config_file);

describe('Test load config file', () => {
  it('should load API info', (done) => {
    config.load((obj) => {
      expect(obj.API_X).toBeTruthy();
      done();
    });
  });
});
