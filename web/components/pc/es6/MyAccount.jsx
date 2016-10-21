/**
 * Created by cshao on 8/7/16.
 */

'use strict';

import React from 'react';
import api from '../../common/api';

import ItemList from './ItemList';

class MyAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {itemListData: []};
  }
  componentDidMount() {
    $.get(api.ITEM_LIST, (data) => this.setState({itemListData: data}));
  }
  handleDeleteData(id) {
    $.ajax(api.ITEM_LIST+'/'+id, {
      method: 'DELETE'
    }).done(function() {
      let newItemListData = this.state.itemListData;
      for (let i=0; i<newItemListData.length; i++) {
        if (newItemListData[i].id === id) {
          newItemListData.splice(i, 1);
          break;
        }
      }
      this.setState({
        itemListData: newItemListData
      });
    }.bind(this));
  }

  render() {
    return (
      <div>
        <h3>Item list</h3>
        {this.state.itemListData.length > 0 ?
          <ItemList data={this.state.itemListData} handleDeleteData={this.handleDeleteData.bind(this)}/>
          :
          null
        }
      </div>
    );
  }
}

export default MyAccount;
