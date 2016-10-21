/**
 * Created by cshao on 8/7/16.
 */

'use strict';

var React = require('react');

var ItemList = React.createClass({
  componentDidMount: function() {
    this.props.initList();
  },
  handleDeleteData: function(rowDataId) {
    this.props.handleDeleteData(rowDataId);
  },
  render: function(){
    var rows = this.props.data.map(function(rowData, index) {
      return (
        <tr key={index}>
          <td>{rowData.col1}</td>
          <td>{rowData.col2}</td>
          <td>{rowData.col3}</td>
          <td className="text-center">
            <span>
              <a href="javascript:;" onClick={this.handleDeleteData.bind(this, rowData.id)}>Delete</a>
            </span>
          </td>
        </tr>
      );
    }.bind(this));

    return (
      <div>
        <table className="table item-list-table">
          <thead>
            <tr>
              <th>Column 1</th>
              <th>Column 2</th>
              <th>Column 3</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          {rows}
          </tbody>
        </table>
      </div>
    );
  }
});

module.exports = ItemList;
