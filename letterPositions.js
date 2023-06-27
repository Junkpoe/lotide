const eqArrays = function(arr1, arr2) {
  for (let x = 0; x < arr1.length || x < arr2.length; ++x) {
    if (arr1[x] !== arr2[x]) {
      return false;
    }
  } return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual[0], actual[1]) !== expected) {
    return false;
  } else {
    return true;
  }
};
//Set up a function to bring up the letter and return the position the it shows up without counting spaces
const letterPosition = function(sentence) {
  const results = {};
  //seting up a loop to count the letters but skip spaces
  for (let x = 0; x < sentence.length; x++) {
    let letter = sentence[x];
    if (letter === ' ') {
      continue;
    } else if (!results[letter]) {
        results[letter] = [x];
    } else {
        results[letter].push(x);
    }
  }

  return results;
}

console.log(letterPosition("where are the chickens"))