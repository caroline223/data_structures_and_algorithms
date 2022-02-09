function findShortestStringRecursive(arr) {
  // type your code here
  if (arr.length === 1){
    return arr[0]
  }

  const secondWord = findShortestStringRecursive(arr.slice(1))

  return arr[0].length <= secondWord.length ? arr[0] : secondWord
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestStringRecursive(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestStringRecursive(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestStringRecursive(['flower', 'juniper', 'lily', 'dandelion']));
}

module.exports = findShortestStringRecursive;

// Please add your pseudocode to this file
// And a written explanation of your solution

//Solution without recursion
//function findShortestString(arr){

// return arr.sort((a,b) => a.length - b.length)[0]

// }