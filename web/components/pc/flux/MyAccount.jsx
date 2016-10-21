/**
 * Created by cshao on 8/7/16.
 */

'use strict';

var React = require('react');
var WebAPIUtils = require('./utils/WebAPIUtils');
var ItemStore = require('./store/ItemStore');

var ItemList = require('./ItemList');

var MyAccount = React.createClass({
  getInitialState: function() {
    return {itemListData: ItemStore.getItems()};
  },
  componentDidMount: function() {
    ItemStore.addChangeListener(this.onItemsChange);
    WebAPIUtils.listItem();
  },
  componentWillUnmount: function() {
    ItemStore.removeChangeListener(this.onItemsChange);
  },
  onItemsChange: function() {
    this.setState({
      itemListData: ItemStore.getItems()
    });
  },
  handleDeleteData: function(id) {
    WebAPIUtils.deleteItem(id);
  },
  render: function(){
    return (
      <div>
        <h3>Item list</h3>
        {this.state.itemListData.length > 0 ?
          <ItemList data={this.state.itemListData} handleDeleteData={this.handleDeleteData}/>
          :
          null
        }
      </div>
    );
  }
});

module.exports = MyAccount;
