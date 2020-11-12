/* 
Write a function called same, which accepts two arrays. 
The function should return true if every value in the array has its corresponding value squared in the second array.
The frequency of values must be the same.

same([1, 2, 3], [4, 1 , 9]) -> True
same([1, 2, 3], [1, 9]) -> False
same([1, 2, 1], [4, 4, 1]) -> False (must be same frequency)
*/

const same = (arr1, arr2) => {
  if (arr1.lenghth !== arr2.lenghth) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let num of arr1) {
    frequencyCounter1[num] = (frequencyCounter1[num] || 0) + 1;
  }

  for (let num of arr2) {
    frequencyCounter2[num] = (frequencyCounter2[num] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }

    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
};

console.log(same([1, 2, 3], [4, 1, 9]));
console.log(same([1, 2, 3], [1, 9]));
console.log(same([1, 2, 1], [4, 4, 1]));
