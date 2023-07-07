const assertEqual = require('./assertEqual');

const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');

const takeUntil = function(array, callback) {
  let result = [];
  for (x = 0; x < array.length; x++) {
    if (callback(array[x])) {
      result = array.slice(0, x);
      return result;
    }
  }
  return result;
};

module.exports = takeUntil;

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);

// const test = ["This", "is", "a", "test", ".", "Here's", "a", "second", "test"];
// const result1 = takeUntil(test, x => x === '.');
// console.log(result1);

// assertArraysEqual(results1, data1.slice(0, 5));
// assertArraysEqual(results2, data2.slice(0, 4));
// assertArraysEqual(result1, test.slice(0, 4));