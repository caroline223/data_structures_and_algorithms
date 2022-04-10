function consecutiveSubstrings(string) {
  // type your code here
  const newArr = string.split('')
  const subStrings = []

  newArr.forEach((character, index) => {
    subStrings.push(character)

    let fragment = character

    newArr.slice(index + 1).forEach((letter) => {
      fragment += letter
      subStrings.push(fragment)
    })
  })
  return subStrings
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));
}

module.exports = consecutiveSubstrings;

// Please add your pseudocode to this file
// And a written explanation of your solution

// I knew that we could get the consective substrings by iterating over the strings.
//Once iterating over the string, we push that string into a new array.
//Furthermore, we had to store that character in a variable, for which that is where we store the 
//rest of the characters.
//Then, we iterate over the string starting from one index ahead and push that fragment into the new array
//as well. 