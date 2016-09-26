/**
 * Created by cshao on 9/20/16.
 */

"use strict";

const relativeToRoot = '../../';
const middlewares_file = relativeToRoot + require(relativeToRoot + 'tests').middleware_path + '/middleware';
const middlewares = require(middlewares_file);

describe('Test notFoundHandler', () => {
  it('should return 404 error', () => {
    middlewares.notFoundHandler({}, {}, (err) => {
      expect(err.message).toBe('Not Found');
      expect(err.status).toBe(404);
    });
  });
});