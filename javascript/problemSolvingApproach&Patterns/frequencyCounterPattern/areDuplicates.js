/*
Implement a function called areThereDuplicates, which accepts a variable number of arguments,
and checks whether there are duplicates among the arguments passed passed in.
You can solve using the frequency counter OR the multiple pointer pattern.

areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true
areThereDuplicates('a', 'b', 'c', 'a') // true
*/

// Frequency Counter Method
const areThereDuplicates = (...args) => {
  let frequencyCounter = {};

  for (const item of args) {
    frequencyCounter[item] = (frequencyCounter[item] || 0) + 1;
  }

  for (const key in frequencyCounter) {
    if (frequencyCounter[key] > 1) {
      return true;
    }
  }
  return false;
};

console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates("a", "b", "c", "a"));

// Multiple Pointer Method
function areThereDuplicates(...args) {
  // Two pointers
  args.sort((a, b) => a > b);
  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}

// Linear solution
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}
