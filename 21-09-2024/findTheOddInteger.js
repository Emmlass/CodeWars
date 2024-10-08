/*
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
*/

// takes in an array of integers
// checks for the array that appears an odd number of times
// returns the number
// Note: only one element will appear odd number of times

console.log(findOdd([1,1,2]),2)
console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]),4)


function findOdd(A) {
  //happy coding!
//   using the XOR logic operation (^) 
// because it wcancels out even pairs
//   where a^a = 0 and a ^ 0 = a
   return A.reduce((e,i)=> e ^ i,0)
 
  
}   