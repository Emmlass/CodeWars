/*
This method, which is supposed to return the result of dividing its first argument by its second, isn't always returning correct values. Fix it.

*/

const solveDiv= (x,y)=> {
   return x/y
}  


console.log(solveDiv(2, 1),2)
console.log(solveDiv(2,4),0.5)
console.log(solveDiv(42,0), 'Infinity')
console.log(solveDiv(0,8), 0)
console.log(solveDiv(7,2), 3.5)