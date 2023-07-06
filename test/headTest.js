const assert = require('chai').assert;
const head = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });
});

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual("The weather is nice", "The weather is nice");
// assertEqual("The chicken croseed the road", "To get to the other side");
// assertEqual(23, 2374);
// assertEqual(2745, 2745);
// assertEqual(head([5,6,7], 5));
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "hello");
// assertEqual(head(["weirdness"]), "welp");
// assertEqual(head([]), 1);