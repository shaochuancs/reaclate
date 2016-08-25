/**
 * Created by cshao on 8/7/16.
 */

"use strict";

import React from 'react';

import ItemList from '../container/ItemList';

class MyAccount extends React.Component {
  render() {
    return (
      <div className="container my-account-wrapper">
        <h3>Item list</h3>
        <ItemList/>
      </div>
    );
  }
}

export default MyAccount;