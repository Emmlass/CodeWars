/*An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

Examples
"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK"

Strings Fundamentals
*/ 

const isAnagram =(test, original)=>{
  let first = test.toLowerCase().split("").sort().join()

  console.log(first);
  let last = original.toLowerCase().split("").sort().join()
  console.log(last);
  return (first == last)? true: false;
 
};