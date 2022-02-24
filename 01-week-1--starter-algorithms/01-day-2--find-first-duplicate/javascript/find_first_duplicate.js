function findFirstDuplicate(arr) {
  // type your code here
  let elementSet = new Set()

  for(let i = 0; i < arr.length; i++ ){
   if(elementSet.has(arr[i])){
     return arr[i]
   }
   elementSet.add(arr[i])
  }
  return - 1
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution

// For this code, I assgined a variable elementSet to be a new Set of unique values that 
// were originally derived from a given array. I then established a loop for which the loop was to iterate
// through each element of a given array and if the number was not the fist instance of a duplicate, enter 
// that number into the new set for which that said number is given a unqiue identifier. However, if a number appears as a duplicate,
// the loop would stop and return the value of the duplicate number. It would not be added to the set . 
// If after iterating through the loop and there are no duplicates, it would return a value of -1. 
//Note: every value in the Set() has to be unique; there cannot be any duplicate values. 

