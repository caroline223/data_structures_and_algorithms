function reverseString(str) {
  // type your code here
  let newString = ""
  for(let i = str.length - 1; i >=0; i--){
    newString += str[i]
  }
  return newString
}
console.log("Caroline")

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));

  console.log("Expecting: 'eniloraC'");
  console.log("=>", reverseString("Caroline"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution

//My explanation
//With buil-in methods
//Take the string and split the string into an array
//then take the contents of the array and rearrange them

//Without built-in methods
//take the last element of an array and add it to the beginning until complete (use a loop)
//take the second to last letter and place it at the end of the array successively 
//then rejoin the array back into a string 

//reversed the string with a decrementing for loop
