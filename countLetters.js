const assertEqual = require('./assertEqual');


const letterCount = sentence => {
  //Creating an object to store letter occurences
  const countLetter = {};
  //Looking to loop over each letter in a sentence
  for (let x = 0; x < sentence.length; x++) {
    const letter = sentence[x];
    //Check if the letter is new or not and create a new property for it asigning it the value of 1
    //added code to remove spaces so they won't be counted
    if (letter === ' ') {

      continue;

    } else if (!countLetter[letter]) {
      countLetter[letter] = 1;

      //else we already have the letter and increment it by 1
    } else {
      countLetter[letter]++;
    }
  }

  return countLetter;
};

module.exports = letterCount;
// console.log(letterCount("where do the chickens go"));

// console.log()