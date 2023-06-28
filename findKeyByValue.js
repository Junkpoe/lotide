const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log('✔✔✔Assertion Passed: [actual] === [expected]');
  } else {
    return console.log('🛑🛑🛑Assertion Failed: [Actual] !== [expected]');
  }
};
//a function to check the keyword and value
const findKeyByValue = function(keyWord, value) {
  let objKey = Object.keys(keyWord)
  let count = 0;
  //loop to check the keyword and count it's position on the index
  for (let element in keyWord) {
    if (keyWord[element] === value) {
      return objKey[count];
    } else {
      count++;
    }
  }
}

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

const bestGamesByGenre = {
  rpg: "Mass Effect 2",
  mmo: "FFXIV",
  platformer: "Banjo Tooie"
};

assertEqual(findKeyByValue(bestGamesByGenre, "Mass Effect 2"), "mmo");
assertEqual(findKeyByValue(bestGamesByGenre, "Banjo Tooie"), "platformer");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine Nine"), "mmo");
