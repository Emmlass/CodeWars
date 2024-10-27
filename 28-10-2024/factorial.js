/*

Your task is to write function factorial.

https://en.wikipedia.org/wiki/Factorial


*/

function factorial(n) {
  //your code here
  let result = 1;
  for (let i = n; n > 1; n--) {
    result *= n;
  }
  return result;
}
