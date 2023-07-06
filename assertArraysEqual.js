const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual[0], actual[1]) !== expected) {
    return false;
  } else {
    return true;
  }
};

module.exports = assertArraysEqual;