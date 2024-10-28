/*

Your task is to write function factorial.

https://en.wikipedia.org/wiki/Factorial


*/

// Take Number integers as parameter
//returns the factorial of the number
// eg 5 factorial should give 120

console.log(factorial(5), 120)
console.log(factorial(6), 720)
function factorial(n) {
  //your code here

  let result = 1;
  for (let i = n; n > 1; n--) {
    result *= n;
  }
  return result;
}
