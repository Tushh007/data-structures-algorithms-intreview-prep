/*
Write a recursive function called capitalizeFirst.
Given an array of strings, capitalize the first letter of each string in the array.
*/

const capitalizeFirst = (arr) => {
  if (arr.length === 1) {
    return arr[0].charAt(0).toUpperCase() + arr[0].slice(1);
  }
  return []
    .concat([arr[0].charAt(0).toUpperCase() + arr[0].slice(1)])
    .concat(capitalizeFirst(arr.slice(1)));
};

console.log(capitalizeFirst(["car", "taco", "banana"])); // ['Car','Taco','Banana']
