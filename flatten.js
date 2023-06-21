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

console.log(flatten([1, 2, [3, 4], 5, [6]]));