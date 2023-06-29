const eqArrays = function(arr1, arr2) {
  for (let x = 0; x < arr1.length || x < arr2.length; ++x) {
    if (arr1[x] !== arr2[x]) {
      return false;
    }
  } return true;
};

//Returns true if both objects have identical key with identical values
//Otherwise you get back false
const eqObjects = function(obj1, obj2) {
  let firstKey = Object.keys(obj1);
  let secondKey = Object.keys(obj2);
  let result = false;
  if (firstKey.length === secondKey.length) {
    firstKey.forEach(element => {
      if (secondKey.includes(element) && obj1[element] === obj2[element]) {
        result = true;
      } else if (Array.isArray(obj1[element]) && Array.isArray(obj2[element])) {
        result = eqArrays(obj1[element], obj2[element]);
      } else {
        result = false;
      }
    });
  }
  return result;
};


const assertObjectsEqual = function(actual1, expected1) {
  const inspect = require('util').inspect;
  if (eqObjects(actual1, expected1)) {
    console.log(`✔✔✔Assertion Passed: ${inspect(actual1)} === ${inspect(expected1)}`);
  } else {
    console.log(`🛑🛑🛑 node assertObjectsEqual.jsAssertion Failed: ${inspect(actual1)} !== ${inspect(expected1)}`);
    
  }
}

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertObjectsEqual(ab, ba);