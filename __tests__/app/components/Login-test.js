/**
 * Created by cshao on 8/25/16.
 */

"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');

var relativeToRoot = '../../../';
var component_file = relativeToRoot + require(relativeToRoot + 'tests').app_path + '/components/Login.jsx';

jest.dontMock(component_file);

var Login = require(component_file).default;

describe('Test Login component', function() {
  it('test login form', function() {
    var dom = TestUtils.renderIntoDocument(
      <Login />
    );
    var formDOM = TestUtils.findRenderedDOMComponentWithTag(dom, 'form');
    expect(formDOM.childNodes.length).toEqual(4);
  });
});