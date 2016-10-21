/**
 * Created by cshao on 9/20/16.
 */

'use strict';

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

describe('Test devErrorHandler', () => {
  var res;
  beforeEach(() => {
    res = {
      redirect: jest.fn(),
      status: jest.fn(),
      render: jest.fn()
    };
  });
  afterEach(() => {
    res = null;
  });
  it('should render correct error message', () => {
    var errorObj = {message: 'sample error message'};
    middlewares.devErrorHandler(errorObj, {}, res, null);
    expect(res.render.mock.calls[0][0]).toBe('error');
    expect(res.render.mock.calls[0][1].message).toBe('sample error message');
  });
  it('should render correct error object', () => {
    var errorObj = {message: 'sample error message'};
    middlewares.devErrorHandler(errorObj, {}, res, null);
    expect(res.render.mock.calls[0][0]).toBe('error');
    expect(res.render.mock.calls[0][1].error).toBe(errorObj);
  });
  it('should return default 500 status code', () => {
    var errorObj = {message: 'sample error message'};
    middlewares.devErrorHandler(errorObj, {}, res, null);
    expect(res.status.mock.calls[0][0]).toBe(500);
  });
  it('should return error status code if it is not 401 or 404', () => {
    var errorObj = {message: 'sample error message', status: 502};
    middlewares.devErrorHandler(errorObj, {}, res, null);
    expect(res.status.mock.calls[0][0]).toBe(502);
  });
  it('should redirect to /404 page if error status code is 404', () => {
    var errorObj = {message: 'sample error message', status: 404};
    middlewares.devErrorHandler(errorObj, {}, res, null);
    expect(res.redirect.mock.calls[0][0]).toBe('/404');
  });
  it('should return 401 status code if error code is 401 and the path includes /api/', () => {
    var errorObj = {message: 'sample error message', status: 401};
    var req = {path: '/api/sampleAPI'};
    middlewares.devErrorHandler(errorObj, req, res, null);
    expect(res.status.mock.calls[0][0]).toBe(401);
    expect(res.redirect.mock.calls.length).toBe(0);
  });
  it('should redirect to mobile login page if error status code is 401 and the path does not includes /api/', () => {
    var errorObj = {message: 'sample error message', status: 401};
    var req = {path: '/m/secure/samplePage', originalUrl: '/m/secure/samplePage'};
    middlewares.devErrorHandler(errorObj, req, res, null);
    expect(res.redirect.mock.calls[0][0]).toBe('/m/login?redirectUrl=/m/secure/samplePage');
  });
  it('should redirect to pc login page if error status code is 401 and the path does not includes /api/', () => {
    var errorObj = {message: 'sample error message', status: 401};
    var req = {path: '/secure/samplePage', originalUrl: '/secure/samplePage'};
    middlewares.devErrorHandler(errorObj, req, res, null);
    expect(res.redirect.mock.calls[0][0]).toBe('/login?redirectUrl=/secure/samplePage');
  });
});

describe('Test prodErrorHandler', () => {
  var res;
  beforeEach(() => {
    res = {
      redirect: jest.fn(),
      status: jest.fn(),
      render: jest.fn()
    };
  });
  afterEach(() => {
    res = null;
  });
  it('should render empty error object', () => {
    var errorObj = {message: 'sample error message'};
    middlewares.prodErrorHandler(errorObj, {}, res, null);
    expect(res.render.mock.calls[0][0]).toBe('error');
    expect(res.render.mock.calls[0][1].error).toEqual({});
  });
});
