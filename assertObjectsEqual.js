const eqArrays = require('./eqArrays');

//Returns true if both objects have identical key with identical values
//Otherwise you get back false
const eqObjects = require('./eqObjects');


const assertObjectsEqual = function(actual1, expected1) {
  const inspect = require('util').inspect;
  if (eqObjects(actual1, expected1)) {
    console.log(`✔✔✔Assertion Passed: ${inspect(actual1)} === ${inspect(expected1)}`);
  } else {
    console.log(`🛑🛑🛑 node assertObjectsEqual.jsAssertion Failed: ${inspect(actual1)} !== ${inspect(expected1)}`);
    
  }
}

module.exports = assertObjectsEqual;
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertObjectsEqual(ab, ba);