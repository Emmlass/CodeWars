/*
Create a function that accepts an array of names, and returns an array of each name with its first letter capitalized and the remainder in lowercase.

Examples
["jo", "nelson", "jurie"] -->  ["Jo", "Nelson", "Jurie"]
["KARLY", "DANIEL", "KELSEY"] --> ["Karly", "Daniel", "Kelsey"]
StringsArraysFundamentals
*/

// Takes in an array of strings that could be in any case

// and returns a new array with each name capitalized properly.

function capMe(names) {

  names.map((e,i)=>{
    names[i] = e.charAt(0).toUpperCase() + e.slice(1).toLowerCase();
  })
  return names

}

console.log(capMe(["jo", "neLSon", "jurie"]),["Jo", "Nelson", "Jurie"])
