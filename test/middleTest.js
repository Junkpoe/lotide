const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns 2 for [1, 2, 3]", () => {
    assert.strictEqual(middle([1, 2, 3]), 2);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(middle(['5']), '5');
  });
});

//Code to test function

// console.log(middleArray([1]));
// console.log(middleArray(["Why", "did", "the", "chicken", "cross", "the", "road?"]))