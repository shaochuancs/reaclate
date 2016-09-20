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