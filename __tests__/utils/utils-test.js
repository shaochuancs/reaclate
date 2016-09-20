/**
 * Created by cshao on 8/25/16.
 */

"use strict";

const relativeToRoot = '../../';
const utils_file = relativeToRoot + require(relativeToRoot + 'tests').utils_path + '/utils';

const utils = require(utils_file);

describe('Test URL utils', () => {
  test('test encodeURL', () => {
    const srcURL = 'http://example.com/test?a=42&b=88';
    const expectedVal = 'http://example.com/test__qm__a__eq__42__and__b__eq__88';
    const actualVal = utils.encodeURL(srcURL);
    expect(actualVal).toBe(expectedVal);
  });

  test('test decodeURL', () => {
    const srcURL = 'http://example.com/test__qm__a__eq__42__and__b__eq__88';
    const expectedVal = 'http://example.com/test?a=42&b=88';
    const actualVal = utils.decodeURL(srcURL);
    expect(actualVal).toBe(expectedVal);
  });
});

describe('Test AppComponents', () => {
  const AppComponents = utils.getAppComponents();

  test('test routes', function() {
    const displayName = AppComponents.routes.type.displayName;
    const path = AppComponents.routes.props.path;

    expect(displayName).toBe('Route');
    expect(path).toBe('/app');
  });
});

describe('Test port normalizer', () => {
  test('Test named pipe', () => {
    const pipeName = 'xPipe';
    const expectedPort = 'xPipe';
    expect(utils.normalizePort(pipeName)).toBe(expectedPort);
  });
  test('Test port number string', () => {
    const portString = '3000';
    const expectedPort = 3000;
    expect(utils.normalizePort(portString)).toBe(expectedPort);
  });
  test('Test port number', () => {
    const portNum = 3000;
    const expectedPort = 3000;
    expect(utils.normalizePort(portNum)).toBe(expectedPort);
  });
  test('Test invalid port number', () => {
    const invalidPortNum = -42;
    const expectedResult = false;
    expect(utils.normalizePort(invalidPortNum)).toBe(expectedResult);
  });
});

describe('Test error handler', () => {
  const sampleNonListenError = new Error('sample non-listen error');
  const sampleEACCESError = new Error('sample EACCES error');
  sampleEACCESError.syscall = 'listen';
  sampleEACCESError.code = 'EACCES';
  const sampleEADDRINUSEError = new Error('sample EADDRINUSE error');
  sampleEADDRINUSEError.syscall = 'listen';
  sampleEADDRINUSEError.code = 'EADDRINUSE';
  const sampleListenError = new Error('sample listen error');
  sampleListenError.syscall = 'listen';
  test('Test non-listen error', () => {
    expect(function(){utils.handleError(sampleNonListenError, 3000, new Function());}).toThrowError('sample non-listen error');
  });
  test('Test EACCES error', () => {
    utils.handleError(sampleEACCESError, 3000, (message, isExitProcess) => {
      expect(message).toBe('Port 3000 requires elevated privileges');
      expect(isExitProcess).toBe(true);
    });
  });
  test('Test EACCES error on pipe', () => {
    utils.handleError(sampleEACCESError, 'samplePipe', (message, isExitProcess) => {
      expect(message).toBe('Pipe samplePipe requires elevated privileges');
      expect(isExitProcess).toBe(true);
    });
  });
  test('Test EADDRINUSE error', () => {
    utils.handleError(sampleEADDRINUSEError, 3000, (message, isExitProcess) => {
      expect(message).toBe('Port 3000 is already in use');
      expect(isExitProcess).toBe(true);
    });
  });
  test('Test plain listen error', () => {
    expect(function(){utils.handleError(sampleListenError, 3000, new Function())}).toThrowError('sample listen error');
  });
});