const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');
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
};

module.exports = letterPosition;
// console.log(letterPosition("where are the chickens"));