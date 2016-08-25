/**
 * Created by cshao on 8/25/16.
 */

"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');

var relativeToRoot = '../../../';
var component_file = relativeToRoot + require(relativeToRoot + 'tests').app_path + '/components/ItemList.jsx';

jest.dontMock(component_file);

var ItemList = require(component_file).default;

describe('Test ItemList component', function() {
  it('test item table rows', function() {
    var testData = [{
      id: 12,
      col1: '1AAA',
      col2: '1BBB',
      col3: '1CCC'
    },{
      id: 13,
      col1: '1MMM',
      col2: '1NNN',
      col3: '1OOO'
    },{
      id: 14,
      col1: '1DDD',
      col2: '1EEE',
      col3: '1FFF'
    },{
      id: 15,
      col1: '1GGG',
      col2: '1HHH',
      col3: '1III'
    }];
    var dom = TestUtils.renderIntoDocument(
      <ItemList data={testData} />
    );
    var tbodyDOM = TestUtils.findRenderedDOMComponentWithTag(dom, 'tbody');
    expect(tbodyDOM.childNodes.length).toEqual(4);
  });
});