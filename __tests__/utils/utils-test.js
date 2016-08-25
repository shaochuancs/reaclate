/**
 * Created by cshao on 8/25/16.
 */

"use strict";

var relativeToRoot = '../../';
var utils_file = relativeToRoot + require(relativeToRoot + 'tests').utils_path + '/utils';

jest.dontMock(utils_file);

var utils = require(utils_file);

describe('Test URL utils', function() {
  it('test encodeURL', function() {
    var srcURL = 'http://example.com/test?a=42&b=88';
    var expectedVal = 'http://example.com/test__qm__a__eq__42__and__b__eq__88';
    var actualVal = utils.encodeURL(srcURL);
    expect(actualVal).toEqual(expectedVal);
  });

  it('test decodeURL', function() {
    var srcURL = 'http://example.com/test__qm__a__eq__42__and__b__eq__88';
    var expectedVal = 'http://example.com/test?a=42&b=88';
    var actualVal = utils.decodeURL(srcURL);
    expect(actualVal).toEqual(expectedVal);
  });
});

describe('Test AppComponents', function() {
  var AppComponents = utils.getAppComponents();

  it('test routes', function() {
    var displayName = AppComponents.routes.type.displayName;
    var path = AppComponents.routes.props.path;

    expect(displayName).toEqual('Route');
    expect(path).toEqual('/app');
  });
});