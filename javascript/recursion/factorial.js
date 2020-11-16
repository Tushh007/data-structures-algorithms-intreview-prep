/*
Write a function factorial which accepts numbers and returns factorial of that number. A factorial is the product of an integer 
and the integers below it. e.g. factorial(4!) is equal to 24, because 4 * 3 * 2* 1 is 24.
Factorial zero (0!) is always 1.
*/

const factorial = (num) => {
  if (num < 0) {
    return 0;
  }

  if (num <= 1) {
    return 1;
  }

  return num * factorial(num - 1);
};

console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(4)); // 24
console.log(factorial(7)); // 5040
