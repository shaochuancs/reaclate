/**
 * Created by cshao on 8/7/16.
 */

"use strict";

var React = require('react');
var createStore = require('redux').createStore;
var myAccountReducer = require('../reducer/MyAccountReducer');
var myAccountStore = createStore(myAccountReducer, []);
var WebAPIUtils = require('../utils/WebAPIUtils');
var ItemActionCreator = require('../action/ItemActionCreator');

var ItemList = require('./ItemList');

var unsubscribe;
var MyAccount = React.createClass({
  getInitialState: function() {
    return {itemListData: myAccountStore.getState()};
  },
  componentDidMount: function() {
    unsubscribe = myAccountStore.subscribe(this.onItemsChange);
    WebAPIUtils.listItem(function(data) {
      myAccountStore.dispatch(ItemActionCreator.listItem(data));
    });
  },
  componentWillUnmount: function() {
    unsubscribe();
  },
  onItemsChange: function() {
    this.setState({
      itemListData: myAccountStore.getState()
    });
  },
  handleDeleteData: function(id) {
    WebAPIUtils.deleteItem(id, function(id) {
      myAccountStore.dispatch(ItemActionCreator.deleteItem(id));
    });
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