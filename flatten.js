const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');

const flatten = function(arr) {
  //input: an array that contains a nested array
  // output: an array that removes the nested array

  let outputArray = [];

  for (let i = 0; i < arr.length; i++) {
   if (!Array.isArray(arr[i])) {
      outputArray.push(arr[i]);
    } else {
      for (let j = 0; j < arr[i].length; j++) {
        outputArray.push(arr[i][j]);
      }
    }
  }

  return outputArray;

}

module.exports = flatten;
// console.log(flatten([1, 2, [3, 4], 5, [6]]));