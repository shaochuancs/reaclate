/**
 * Created by cshao on 8/25/16.
 */

"use strict";

const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');

const relativeToRoot = '../../../';
const component_file = relativeToRoot + require(relativeToRoot + 'tests').app_path + '/components/Login.jsx';

const Login = require(component_file).default;

describe('Test Login component', () => {
  test('test login form', () => {
    const dom = TestUtils.renderIntoDocument(
      <Login />
    );
    const formDOM = TestUtils.findRenderedDOMComponentWithTag(dom, 'form');
    expect(formDOM.childNodes.length).toBe(4);
  });
});