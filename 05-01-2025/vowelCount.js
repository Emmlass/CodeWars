/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/


// https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript

// Collect strings as input
// return the number of vowel characters in the strings

console.log(getCount("abracadabra"), 5)

function getCount(str) {
    // create a count variable
    let count = 0;
    // create vowel strings
    let vowel= "aeiou";
    // loop through the string and check if each character is a vowel
    for(let i=0; i<str.length; i++) {
        if(vowel.includes(str[i])) {
            count++;
        }
    }
    // return number of vowels in str
    return count;
}