/**
 * Created by cshao on 8/22/16.
 */

'use strict';

import {connect} from 'react-redux';
import {listItemAction, deleteItemAction} from '../action/ItemActionCreator';
import ItemList from '../components/ItemList';
import {listItem, deleteItem} from '../utils/WebAPIUtils';

function mapStateToProps(state) {
  return {
    data: state.items
  };
}

function mapDispatchToProps(dispatch) {
  return {
    initList: function() {
      listItem(function(data) {
        dispatch(listItemAction(data));
      });
    },
    handleDeleteData: function(id) {
      deleteItem(id, function(id) {
        dispatch(deleteItemAction(id));
      });
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
