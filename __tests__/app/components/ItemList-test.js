/**
 * Created by cshao on 8/25/16.
 */

"use strict";

const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');

const relativeToRoot = '../../../';
const component_file = relativeToRoot + require(relativeToRoot + 'tests').app_path + '/components/ItemList.jsx';

const ItemList = require(component_file).default;

describe('Test ItemList component', () => {
  test('test item table rows', () => {
    const testData = [{
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
    const dom = TestUtils.renderIntoDocument(
      <ItemList data={testData} />
    );
    const tbodyDOM = TestUtils.findRenderedDOMComponentWithTag(dom, 'tbody');
    expect(tbodyDOM.childNodes.length).toBe(4);
  });
});