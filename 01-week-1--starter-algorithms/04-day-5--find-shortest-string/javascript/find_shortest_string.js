function findShortestString(arr) {
  return arr.sort((a, b) => a.length - b.length)[0]
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  // BENCHMARK HERE
}

module.exports = findShortestString;

// Please add your pseudocode to this file
// And a written explanation of your solution

//Iterating through each string within the array, you are looking to determine the string with the shortest 
//length. According to the code, if the difference between the length of the first string and the length
//of the second string is positive, that means that the second string is shorter than the first string and should
//be moved to the beginning index of the array. Likewise, if the difference is negative, that means that the length of
//the first string is shorter than the length of the second string and should remain as the beginning index 
//of the array. 
