const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log('✔✔✔Assertion Passed: [actual] === [expected]');
  } else {
    return console.log('🛑🛑🛑Assertion Failed: [Actual] !== [expected]');
    
  }
};

const eqArrays = function(arr1, arr2) {
  for (let x = 0; x < arr1.length || x < arr2.length; ++x) {
    if (arr1[x] !== arr2[x]) {
      return false;
    }
  } return true;
};

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

const shirtObject = {color: "red", size: "medium"};
const anotherShirtObject = { size: "medium", color: "red"};

eqObjects(shirtObject, anotherShirtObject); // should return true
assertEqual(eqObjects(shirtObject, anotherShirtObject), true);

const longSleeveShirtObject = {size: "medium", color: "red", sleeveLength: "long"};
eqObjects(shirtObject, longSleeveShirtObject); // should show up as false
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);