/**
 * Created by cshao on 6/12/16.
 */

"use strict";

const debugServer = require('debug')('reaclate:server');

const ENCODING_QUESTION_MARK = '__qm__';
const ENCODING_EQUAL = '__eq__';
const ENCODING_AND = '__and__';

exports.encodeURL = function(url) {
  return url.replace(/\?/g, ENCODING_QUESTION_MARK)
            .replace(/=/g, ENCODING_EQUAL)
            .replace(/&/g, ENCODING_AND);
};
exports.decodeURL = function(encodedUrl) {
  if (!encodedUrl) {
    return null;
  }
  return encodedUrl.replace(new RegExp(ENCODING_QUESTION_MARK, 'g'), '?')
                    .replace(new RegExp(ENCODING_EQUAL, 'g'), '=')
                    .replace(new RegExp(ENCODING_AND, 'g'), '&');
};