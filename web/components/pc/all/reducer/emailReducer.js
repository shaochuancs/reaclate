/**
 * Created by cshao on 8/24/16.
 */

'use strict';

function emailReducer(state = null, action) {
  switch (action.type) {
    case 'login':
      return action.email;
    default:
      return state;
  }
}

export default emailReducer;
