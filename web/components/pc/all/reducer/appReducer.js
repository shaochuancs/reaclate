/**
 * Created by cshao on 8/22/16.
 */

'use strict';

import {combineReducers} from 'redux';

import email from './emailReducer';
import items from './itemsReducer';

module.exports = combineReducers({email, items});
