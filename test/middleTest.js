const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns 2 for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
});

//Code to test function

// console.log(middleArray([1]));
// console.log(middleArray(["Why", "did", "the", "chicken", "cross", "the", "road?"]))