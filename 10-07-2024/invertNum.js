/*
Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

[1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
[1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
[] --> []
You can assume that all values are integers. Do not mutate the input array.

LISTS FUNDAMENTALS ARRAYS
 */






function invert(array) {
    return  array.map((e)=> -1*e);
 }


 console.log(invert([1, 2, 3, 4, 5])) //  expecting  [-1, -2, -3, -4, -5]

 console.log(invert([1, -2, 3, -4, 5])) // expecting [-1, 2, -3, 4, -5]

 console.log(invert([])) // expecting []


 