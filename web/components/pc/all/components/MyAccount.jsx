/**
 * Created by cshao on 8/7/16.
 */

"use strict";

var React = require('react');

var ItemList = require('../container/ItemList');

var MyAccount = React.createClass({
  render: function(){
    return (
      <div className="container my-account-wrapper">
        <div>
          <h3>Item list</h3>
          <ItemList/>
        </div>
      </div>
    );
  }
});

module.exports = MyAccount;