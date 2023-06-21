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
}

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

console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));

console.log(without([], [1]));
console.log(without(["Listen", "to", "this"], ["Listen", "this"]));