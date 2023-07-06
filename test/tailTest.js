const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns 3 for [1, 2, 3]", () => {
    assert.strictEqual(tail([1, 2, 3]), 3);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(tail(['5']), '5');
  });
});

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// console.log(tail(words));
// const num = [2];
// console.log(tail(num));
// const tiddle = [];
// console.log(tail(tiddle));
