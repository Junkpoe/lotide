const eqArrays = require('./eqArrays')

const assertArraysEqual = require('./assertArraysEqual');

const food = ["Chicken", "Pizza", "Fondue", "Teriyaki", "Sushi", "Ramen"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

// const resultsFood = map(food, word => word[0]);
// assertArraysEqual(resultsFood, ["C", "P", "F", "T", "S", "R"]);

