// Test/Assertion Functions

const eqArrays = require('./eqArrays')

const assertArraysEqual = require('./assertArraysEqual')

//Main function for file
const middleArray = function(arr) {
  let outputArray = [];
  let middleIndex = 0;

  if (arr.length <= 2) {
    return outputArray;
  } else {
    //check if the output is even or odd
    if (arr.length % 2 === 0) {
      middleIndex = (arr.length / 2);
      outputArray.push(arr[middleIndex]);
      return outputArray;
    } else {
      middleIndex = Math.ceil((arr.length / 2) - 1);
      outputArray.push(arr[middleIndex]);
      return outputArray;
    }
  }
};

module.exports = middleArray;