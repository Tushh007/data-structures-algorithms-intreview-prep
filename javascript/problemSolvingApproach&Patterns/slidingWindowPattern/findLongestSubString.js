/*
Write a function called findLongestSubstring, 
which accepts and returns the length of the longest substring with all distinct characters.

Time Complexity = O(n)

Example Input:
findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') //8
findLongestSubstring('thisishowwedoit') //6
*/
const findLongestSubstring = (str) => {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }

    longest = Math.max(longest, i - start + 1);
    seen[char] = i + 1;
  }
  return longest;
};

console.log(findLongestSubstring(""));
console.log(findLongestSubstring("rithmschool"));
console.log(findLongestSubstring("thisisawesome"));
console.log(findLongestSubstring("thecatinthehat"));
console.log(findLongestSubstring("bbbbbb"));
console.log(findLongestSubstring("longestsubstring"));
console.log(findLongestSubstring("thisishowwedoit"));
