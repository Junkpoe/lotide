// Test/Assertion Functions

const eqArrays = function(arr1, arr2) {
  for (let x = 0; x < arr1.length || x < arr2.length; ++x) {
    if (arr1[x] !== arr2[x]) {
      return false;
    }
  } return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual[0], actual[1]) !== expected) {
    return false;
  } else {
    return true;
  }
};

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

//Code to test function

console.log(middleArray([1]));
console.log(middleArray(["Why", "did", "the", "chicken", "cross", "the", "road?"]))