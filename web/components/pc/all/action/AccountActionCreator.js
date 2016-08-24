/**
 * Created by cshao on 8/24/16.
 */

"use strict";

function loginAction(email) {
  return {
    type: 'login',
    email: email
  };
}

export {loginAction};