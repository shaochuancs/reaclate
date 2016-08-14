/**
 * Created by cshao on 8/7/16.
 */

"use strict";

var React = require('react');
var api = require('../../common/api');

var ItemList = require('./ItemList');

var currentPage = 1;
var MyAccount = React.createClass({
  getInitialState: function() {
    var initData;
    if (this.props.initListData) {
      initData = this.props.initListData;
    } else if (window.initProps && window.initProps.initListData) {
      initData = window.initProps.initListData;
    } else {
      initData = [];
    }
    return {
      itemListData: initData
    };
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
  selectPage: function(pageNum) {
    if (pageNum === currentPage) {
      return;
    }
    currentPage = pageNum;
    $('.page-selector').removeClass('active');
    $('.page'+pageNum).addClass('active');
    $.get(api.ITEM_LIST, {
      page: pageNum
    }).done(function(data) {
      this.setState({
        itemListData: data
      });
    }.bind(this));
  },
  render: function(){
    return (
      <div>
        <h3>Item list</h3>
        <a href="javascript:;" className="active page-selector page1" onClick={this.selectPage.bind(this, 1)}>Page 1</a>
        <a href="javascript:;" className="page-selector page2" onClick={this.selectPage.bind(this, 2)}>Page 2</a>
        <ItemList data={this.state.itemListData} handleDeleteData={this.handleDeleteData}/>
      </div>
    );
  }
});

module.exports = MyAccount;