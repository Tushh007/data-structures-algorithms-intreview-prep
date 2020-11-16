/*
Write a function called isSubsequence which takes in two strings 
and checks whether the characters in the first string fomrs a subsequence of characters in the second string.
In other words, the function should check whether the characters in the first string appears somewhere in the second string,
without changing their order.

Solution must atleast have the following complexitites:
time complexity: O (N + M)
space complexity: O (1)

Examples:
isSubsequence('hello', 'hello world') // true
isSubsequence('sing', 'sting') // true
isSubsequence('abc', 'abracadabra') // true
isSubsequence('abc', 'acb') // false (order matters)
*/
const isSubsequence = (str1, str2) => {
  let str1Pointer = 0;
  let str2Pointer = 0;

  while (str2Pointer < str2.length) {
    if (str1[str1Pointer] === str2[str2Pointer]) {
      str1Pointer += 1;
    }

    if (str1Pointer === str1.length) {
      return true;
    }
    
    str2Pointer += 1;
  }
  return false;
};

console.log(isSubsequence("hello", "hello world"));
console.log(isSubsequence("sing", "sting"));
console.log(isSubsequence("abc", "abracadabra"));
console.log(isSubsequence("abc", "acb"));

// version 2
function isSubsequence(str1, str2) {
  var i = 0;
  var j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}

// Recursive solution that is not O(1)
function isSubsequence(str1, str2) {
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;
  if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1));
  return isSubsequence(str1, str2.slice(1));
}
