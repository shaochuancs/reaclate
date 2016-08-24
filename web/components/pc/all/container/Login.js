/**
 * Created by cshao on 8/24/16.
 */

"use strict";

import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import {loginAction} from '../action/AccountActionCreator';
import Login from '../components/Login';
import {login} from '../utils/WebAPIUtils';

function mapDispatchToProps(dispatch) {
  return {
    login: function(param) {
      login(param, function() {
        dispatch(loginAction(param.email));
        browserHistory.push('/app/my-account');
      });
    }
  };
}

export default connect(null, mapDispatchToProps)(Login);