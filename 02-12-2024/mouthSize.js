/*
The wide-mouth frog is particularly interested in the eating habits of other creatures.

He just can't stop asking the creatures he encounters what they like to eat. But, then he meets the alligator who just LOVES to eat wide-mouthed frogs!

When he meets the alligator, it then makes a tiny mouth.

Your goal in this kata is to create complete the mouth_size method this method takes one argument animal which corresponds to the animal encountered by the frog. If this one is an alligator (case-insensitive) return small otherwise return wide.

StringsLogicFundamentals
*/


// takes in string of names of animals 
// if animal name is alligator return small
//else return wide
// it should be case insensitive

console.log(mouthSize("toucan"),"wide")

console.log(mouthSize("ant bear"),"wide")

console.log(mouthSize("alligator"),"small")

function mouthSize(animal) {
    // code here
    return (animal.toLowerCase() !== "alligator")? "wide": "small";


  }

  