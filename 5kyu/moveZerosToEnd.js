/*
 Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
ARRAYS SORTING ALGORITHMS
*/
function moveZeros(arr) {
    let sorted= arr.filter((a)=>a === 0);
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
      if(arr[i] != 0){
        newArr.push(arr[i]);
      }
  
        
      
    }
    
    return [].concat(newArr,sorted)
  }


//   Example
moveZeros([1,2,0,1,0,1,0,3,0,1])// [1, 2, 1, 1, 3, 1, 0, 0, 0, 0])