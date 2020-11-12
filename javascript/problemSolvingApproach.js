// I Understanding Problem

// Problem: Write a function that takes two numbers and returns their sum.
// 1. Can I restate the problem in my own words?
// Ans. Implement addition
// 2. What are the inputs that go into the problem?
// Ans. ints? floats? strings for large numbers?
// 3. What are the outputs that should come from the solution to this problem?
// Ans. int? float? string?
// 4. Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem?
// Ans.
// 5. How should I label the important pieces of data that area part of the problem?
// Ans.

// II Explore Concrete Examples

// Problem: Write a function which takes in a string and returns counts of each character in the string.
// 1. Start with simple examples

// charCount('aaaa') // {a: 4, b: 0, c: 0}
// charCount('hello') // {h: 1, e:1, l:2, o:1}

// 2. Progrss to more complex examples

// charCount("my phone number is 1234123412")
// charCount("Hello hi")

// 3. Explore examples with empty inputs

// charCount('')

// 4. Explore examples with invalid inputs
// Ans. Edge Cases

// III Break it down
// Explicitly write down the steps you need to take.

// IV Solve or Simplify
// Find the core difficulity in what you're trying to do
// Temporarily ignore that difficulity
// Write a simplified solution
// Then incorporate that difficulity back in

const charCount = (str) => {
  // make an object to return at the end
  let result = {};
  // loop over string, for each character
  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    // if the char is letter/number and a key in object, add one to count
    if (/[a-z0-9]/.test(char)) {
      if (result[char] > 0) {
        result[char]++;
      }
      // if the char is letter/number and not in object, add it and set value to 1
      else {
        result[char] = 1;
      }
    }
    // if the char is something else (space, period, etc.) don't do anything
  }
  // return object with track of all the letters
  return result;
};

const output = charCount("hello");
console.log(output);

// V Look Back and Refactor
// Can you check the result?
// Can you derive the result differently?
// Can you understand it at a glance?
// Can you use the result or method for some other problem?
// Can you imporve the performance of your solution?
// Can you think of other ways to refactor?
// How have other people solved the problem?

const isAlphaNumeric = (char) => {
  let code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && // numeric (0-9)
    !(code > 64 && code < 91) && // upper alpha (A-Z)
    !(code > 96 && code < 123) // lower alpha (a-z)
  ) {
    return false;
  }
  return true;
};

const improvedCharCount = (str) => {
  let obj = {};
  for (let char of str) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
};

console.log(improvedCharCount("Hello hi"));
