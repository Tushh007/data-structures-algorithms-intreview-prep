/*
Write a function called productOfArray which takes in an array of numbers and
returns the product of them all
*/
const productOfArray = (arr) => {
  if (arr.length - 1 === 0) {
    return arr[arr.length - 1];
  }
  return arr.pop() * productOfArray(arr);
};

console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 10])); // 60

// Version 2
function productOfArray(arr) {
  if (arr.length === 0) {
    return 1;
  }
  return arr[0] * productOfArray(arr.slice(1));
}
