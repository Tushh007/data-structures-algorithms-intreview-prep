/*
Write a function called maxSubarraySum which accepts an array of integers and a number called n.
The function should calculate the maximum sum of n consecutive elements in the array.

maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2) // 10
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4) // 17
maxSubarraySum([4, 2, 1, 6], 1) // 6
maxSubarraySum([4, 2, 1, 6, 2], 4) //13
maxSubarraySum([], 4) // null
*/

const maxSubarraySum = (arr, num) => {
    if (num > arr.length) {
        return null
    }

    let maxSum = 0
    for (let i = 0; i < num; i++) {
        maxSum += arr[i]
    }

    let tempSum = maxSum
    for (let j = num; j < arr.length; j++) {
        tempSum = tempSum - arr[j - num] + arr[j]
        maxSum = Math.max(maxSum, tempSum)
    }
    return maxSum
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2))
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4))
console.log(maxSubarraySum([4, 2, 1, 6], 1))
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4))
console.log(maxSubarraySum([], 4))
