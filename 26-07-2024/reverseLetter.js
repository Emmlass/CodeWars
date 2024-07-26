/*
Task
Given a string str, reverse it and omit all non-alphabetic characters.

Example
For str = "krishan", the output should be "nahsirk".

For str = "ultr53o?n", the output should be "nortlu".

Input/Output
[input] string str
A string consists of lowercase latin letters, digits and symbols.

[output] a string
FUNDAMENTALS
*/

// Given a string of alphanumeric data and non-alphanumeric characters
// return reversed string and omit all non-alphabetic characters

console.log(reverseLetter("ultr53o?n"), "nortlu")
console.log(reverseLetter("krishan"),"nahsirk")

function reverseLetter(str) {
    let reversedString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i].toLowerCase() === str[i].toUpperCase()) {
            continue;
        }
        reversedString += str[i];
    }
    return reversedString;
}