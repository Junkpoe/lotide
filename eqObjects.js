const assertEqual = require('./assertEqual')

const eqArrays = require('./eqArrays')

//Returns true if both objects have identical key with identical values
//Otherwise you get back false
const eqObjects = function(obj1, obj2) {
  let firstKey = Object.keys(obj1);
  let secondKey = Object.keys(obj2);
  let result = false;
  if (firstKey.length === secondKey.length) {
    firstKey.forEach(element => {
      if (secondKey.includes(element) && obj1[element] === obj2[element]) {
        result = true;
      } else if (Array.isArray(obj1[element]) && Array.isArray(obj2[element])) {
        result = eqArrays(obj1[element], obj2[element]);
      } else {
        result = false;
      }
    });
  }
  return result;
};

module.exports = eqObjects;

// const shirtObject = {color: "red", size: "medium"};
// const anotherShirtObject = { size: "medium", color: "red"};

// eqObjects(shirtObject, anotherShirtObject); // should return true
// assertEqual(eqObjects(shirtObject, anotherShirtObject), true);

// const longSleeveShirtObject = {size: "medium", color: "red", sleeveLength: "long"};
// eqObjects(shirtObject, longSleeveShirtObject); // should show up as false
// assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);