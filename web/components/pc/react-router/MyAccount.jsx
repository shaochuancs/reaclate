/**
 * Created by cshao on 8/7/16.
 */

"use strict";

var React = require('react');
var api = require('../../common/api');

var ItemList = require('./ItemList');

var MyAccount = React.createClass({
  getInitialState: function() {
    return {itemListData: []};
  },
  componentDidMount: function() {
    $.get(api.ITEM_LIST, function(data) {
      this.setState({
        itemListData: data
      });
    }.bind(this));
  },
  handleDeleteData: function(id) {
    $.ajax(api.ITEM_LIST+'/'+id, {
      method: 'DELETE'
    }).done(function() {
      var newItemListData = this.state.itemListData;
      for (var i=0; i<newItemListData.length; i++) {
        if (newItemListData[i].id === id) {
          newItemListData.splice(i, 1);
          break;
        }
      }
      this.setState({
        itemListData: newItemListData
      });
    }.bind(this));
  },
  render: function(){
    return (
      <div className="container my-account-wrapper">
        <div>
          <h3>Item list</h3>
          {this.state.itemListData.length > 0 ?
            <ItemList data={this.state.itemListData} handleDeleteData={this.handleDeleteData}/>
            :
            null
          }
        </div>
      </div>
    );
  }
});

module.exports = MyAccount;