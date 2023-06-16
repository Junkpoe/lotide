const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('✔✔✔Assertion Passed: [actual] === [expected]');
  } else {
    console.log('🛑🛑🛑Assertion Failed: [Actual] !== [expected]');
  }
};

const head = function(array) {
  return array[0];
}

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("The weather is nice", "The weather is nice");
assertEqual("The chicken croseed the road", "To get to the other side");
assertEqual(23, 2374);
assertEqual(2745, 2745);
assertEqual(head([5,6,7], 5));
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "hello");
assertEqual(head(["weirdness"]), "welp");
assertEqual(head([]), 1);