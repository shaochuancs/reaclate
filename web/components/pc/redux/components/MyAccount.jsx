/**
 * Created by cshao on 8/7/16.
 */

'use strict';

var React = require('react');

var ItemList = require('../container/ItemList');

var MyAccount = React.createClass({
  render: function(){
    return (
      <div>
        <h3>Item list</h3>
        <ItemList/>
      </div>
    );
  }
});

module.exports = MyAccount;
