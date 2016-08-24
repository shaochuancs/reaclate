/**
 * Created by cshao on 8/24/16.
 */

"use strict";

function login(email) {
  return {
    type: 'login',
    email: email
  };
}

module.exports = {
  login: login
};