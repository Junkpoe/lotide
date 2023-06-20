const eqArrays = function(arr1, arr2) {
  for (let x = 0; x < arr1.length || x < arr2.length; x) {
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
}