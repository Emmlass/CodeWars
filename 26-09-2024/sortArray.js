/*
As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers (Haskell: a tuple).

For example:

gimme([2, 3, 1]) => 0
2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

Another example (just to make sure it is clear):

gimme([5, 10, 14]) => 1
10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.
*/

// function will be array with three    elements
// elements will be numbers
//find the element
//return the index of the element that fits between the two elements when sorted

console.log(indexOfMiddle([7, 3, 5]), 2 );

function indexOfMiddle(arr) {
  // sort the array to find the middle element
  let sorted = [...arr].sort((a, b) => a - b);
  console.log(sorted);
  // get the middle value of the  sorted list

  let middle = sorted[1];

  //  return the index of the middle element
  return arr.indexOf(middle);
}
