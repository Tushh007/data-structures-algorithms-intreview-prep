/* 
Given two strings, write a function to determine if the second string is an anagram of the first. 
An anagram is a word, phrase, or name formed by rearranging the letter of another, such as cinema, formed from iceman.

validAnagram('', '')                            // true
validAnagram('aaz', 'zza')                      // false
validAnagram('anagram', 'nagaram')              // true
validAnagram('rat', 'car')                      // false
validAnagram('awesome', 'awesom')               // false
validAnagram('qwerty', 'qeywrt')                // true
validAnagram('texttwisttime', 'timetwisttext')  // true
*/

const validAnagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  let lookup = {}

  for (let letter of str1) {
      lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1
  }

  for (let letter of str2) {
      if (!lookup[letter]) {
          return false
      } else {
          lookup[letter] -= 1
      }
  }
    return true;
};

console.log(validAnagram("", ""));
console.log(validAnagram("aaz", "zza"));
console.log(validAnagram("anagram", "nagaram"));
console.log(validAnagram("rat", "car"));
console.log(validAnagram("awesome", "awesom"));
console.log(validAnagram("qwerty", "qeywrt"));
console.log(validAnagram("texttwisttime", "timetwisttext"));
