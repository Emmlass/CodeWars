/*
Create a method none? (JS none) that accepts an array and a block (JS: a function), and returns true if the block (/function) returns true for none of the items in the array. An empty list should return true.

Fundamentals

*/


// a function called none that takes in an array and a function as parameters
// returns true if the function returns true for none of the items in the array
//note empty array should return true

//

function none(arr, fun){
    let newArr = arr.filter(e=> fun(e))

    if (newArr.length == 0){
        return true
    }else{
        return false
    }

    
    
  }

