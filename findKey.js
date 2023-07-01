const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log('✔✔✔Assertion Passed: [actual] === [expected]');
  } else {
    return console.log('🛑🛑🛑Assertion Failed: [Actual] !== [expected]');
  }
};

const findKey = function(obj, callBack) {
  let objKey = Object.keys(obj);
  for (let x = 0; x < objKey.length; x++) {
    if (callBack(obj[objKey[x]])) {
      return objKey[x];
    }
  }
  return undefined;
};

// assertEqual(findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2), "Blue Hill");

// assertEqual(findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 1), "Blue Hill");