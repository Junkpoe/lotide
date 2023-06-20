const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log('✔✔✔Assertion Passed: [actual] === [expected]');
  } else {
    return console.log('🛑🛑🛑Assertion Failed: [Actual] !== [expected]');
  }
};


assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("The weather is nice", "The weather is nice");
assertEqual("The chicken croseed the road", "To get to the other side");
assertEqual(23, 2374);
assertEqual(2745, 2745);