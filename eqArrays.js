const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log('✔✔✔Assertion Passed: [actual] === [expected]');
  } else {
    return console.log('🛑🛑🛑Assertion Failed: [Actual] !== [expected]');
  }
};

const eqArrays = function(arr1, arr2) {
  for (let x = 0; x < arr1.length || x < arr2.length; ++x) {
    if (arr1[x] !== arr2[x]) {
      return false;
    }
  } return true;
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);