/*
Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

The order of the sequence has to stay the same.

Examples:

Input -> Output
[1, 1, 2] -> [1, 2]
[1, 2, 1, 1, 3, 2] -> [1, 2, 3]
FundamentalsArraysLists
*/

// takes in array of integers
// integers or numbers will be given in general
// return an array of the listed items without any duplicates

console.log(distinct([1, 1, 2]),[[1, 2]])
console.log(distinct([1, 2, 1, 1, 3, 2]),[1, 2, 3])
function distinct(a) {

    let set = new Set(a)
    
    return Array.from(set)
  }