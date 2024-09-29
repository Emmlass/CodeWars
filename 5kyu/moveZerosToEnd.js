/*
 Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
ARRAYS SORTING ALGORITHMS
*/
function moveZeros(arr) {
    let zeros = arr.filter((e)=> e === 0);
    let nonZeros = arr.filter((e)=> e!== 0);
    console.log( [].concat(nonZeros,zeros))
    return [].concat(nonZeros,zeros)

  }


//   Example
moveZeros([1,2,0,1,0,1,0,3,0,1])// [1, 2, 1, 1, 3, 1, 0, 0, 0, 0])