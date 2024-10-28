/*
 Description:
Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Input = {"Ryan", "Kieran", "Jason", "Yous"}
Output = {"Ryan", "Yous"}

Input = {"Peter", "Stephen", "Joe"}
Output = {}
Input strings will only contain letters. Note: keep the original order of the names in the output.

Fundamentals
*/
// collects arrays of strings
// returns array of strings with 4 letters

console.log(friend("Ryan", "Kieran", "Jason", "Yous"), ["Ryan", "Yous"]);

function friend(names) {
  // filter out elements with 4 letters
  return names.filter((e) => e.length === 4);
}