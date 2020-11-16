/*
Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.
*/

const capitalizeWords = (array) => {
  if (array.length === 1) {
    return array[0].toUpperCase();
  }
  return []
    .concat(array[0].toUpperCase())
    .concat(capitalizeWords(array.splice(1)));
};

let words = ["i", "am", "learning", "recursion"];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
