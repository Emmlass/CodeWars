/*
    Task
You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
Fundamentals Arrays Sorting
  */

function sortArray(array) {
  // Extract the odd numbers and put them in an array
  let oddNums = array.filter((e) => e % 2 !== 0).sort((a, b) => a - b);

  //  initialize index of odd numbers
  let index = 0;
  // create array to old the new numbers
  const arr = array.map((e, i) => {
    // if odd number is present
    if (e % 2 !== 0) {
      return oddNums[index++];
    } else return e;
  });
  return arr;
}

console.log(sortArray([7, 1])); // [1, 7]
console.log(sortArray([5,8,6, 3, 4]),[3, 8, 6, 5, 4])
console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]),[1, 8, 3, 6, 5, 4, 7, 2, 9, 0])