/*
Given an array of integers, return a new array with each value doubled

For example:
[1, 2, 3] --> [2, 4, 6]

*/

// P: Is it always going to be integers? will there ever be an empty array?

// R: returns a new array with each value doubled

// E: if given [2,3,4], returns[4,6,8]
// if given [1,2,3], returns[2,4,6]
// if given [5,10,20], returns[10,20,40]

// P
// create a function that will return an array
function doubled(arr){
// map through the array and multiply through each element by 2
let doubledArray = arr.map(e=> e*2)

// return the result
return doubledArray

}

console.log(doubled([1,2,3],[2,5,6]))//[2,4,6]
console.log(doubled([5,10,20]),[10,20,40])

