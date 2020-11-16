/*
Given an array of integers and a number, write a function called maxSubarraySum, 
which finds the maximum sum of a subarray with the length of the number passed to the function.

Constrains:
time compexity: O(n)
space compexity:O(1)

Sample Inputs:
maxSubarraySum([100, 200, 300, 400], 2) // 700
maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4) // 39
maxSubarraySum([-3, 4, 0, -2, 6, -1], 2) // 5
maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2) //5
maxSubarraySum([2, 3], 3) // null
*/
const maxSubarraySum = (arr, num) => {
  if (num > arr.length) {
    return null;
  }

  let maxSum = 0;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  let tempSum = maxSum;
  for (let j = num; j < arr.length; j++) {
    tempSum += arr[j] - arr[j - num];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
};

console.log(maxSubarraySum([100, 200, 300, 400], 2));
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2));
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2));
console.log(maxSubarraySum([2, 3], 3));
