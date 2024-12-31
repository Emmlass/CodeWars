/*
Your task, is to create N×N multiplication table, of size provided in parameter.

For example, when given size is 3:

1 2 3
2 4 6
3 6 9
For the given example, the return value should be:

[[1,2,3],[2,4,6],[3,6,9]]

link: https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/train/javascript
 */ 

// an array length of the size {N}  
// the array collects other arrays of rows that put in the multiplication of the size of N

// returns an array of the multiplication of N

console.log(multiplicationTable(3), [[1,2,3], [2,4,6], [3,6,9]])

function multiplicationTable(size) {
    // table for the multiplication
    let table = [];
    for(let i =1; i<=size; i++ ){
        // each row as number increases from 1 to N
        let row = []
        for(let j =1; j<=size; j++ ){
            row.push(i*j)
        }table.push(row)
        
    }
    return table;
}

console.log(
    multiplicationTable(5))