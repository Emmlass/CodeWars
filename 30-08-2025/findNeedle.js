/*
Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

Example(Input --> Output)

["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
Note: In COBOL, it should return "found the needle at position 6"

ArraysFundamentals
*/

function findNeedle(haystack) {
  // your code here
  for(let i = 0; i< haystack.length; i++){
    if(haystack[i]=== "needle"){
      let pos = i
      console.log(i)
      return `needle found at position ${pos}`
    }
  }
   return "needle not found"
      
}

console.log(findNeedle(["hay","needle", "junk", "hay", "hay", "moreJunk", "randomJunk"]))

