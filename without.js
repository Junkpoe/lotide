const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');

/**
 * a function that accepts two arrays: the source array, and an "itemsToRemove" array. It returns a new array with the items removed.
 *@param {array} array
 *@param {array} itemToRemove
 *@returns {array} newArray
 */

const without = function(array, itemToRemove) {
  let withoutArr = [];
  for (let i = 0; i < array.length; i++) {
    let addItem = [];
    for (let c = 0; c < itemToRemove.length; c++) {
      if (array[i] === itemToRemove[c]) {
        addItem = false;
      }
    }
    if (addItem) {
      withoutArr.push(array[i]);
    }
  }
  return withoutArr;
};

module.exports = without;

// console.log(without([1, 2, 3], [1]));
// console.log(without(["1", "2", "3"], [1, 2, "3"]));

// console.log(without([], [1]));
// console.log(without(["Listen", "to", "this"], ["Listen", "this"]));