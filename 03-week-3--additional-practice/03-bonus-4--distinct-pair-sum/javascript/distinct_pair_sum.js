function distinctPairSum(arr, k) {
  // type your code here
  const setPairs = {}

  arr.slice(0, -1).forEach((number, index) => { // starting from the first index and going up to the second-to-last index
    const nextValue = arr[index + 1]
    if(number + nextValue === k && setPairs[number] === undefined && setPairs[nextValue] === undefined){
        setPairs[number] = [number, nextValue]
    }
  });

  return Object.values(setPairs) // Here is where we return the unique paired values
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [[1, 1], [2, 0]]");
  console.log("=>", distinctPairSum([0, 1, 1, 2, 0, 1, 1], 2));

  console.log("");

  console.log("Expecting: [[2, 8]]");
  console.log("=>", distinctPairSum([3, 4, 2, 1, 5, 2, 8, 2], 10));
}

module.exports = distinctPairSum;

// Please add your pseudocode to this file
// And a written explanation of your solution

//When iterating over the array, we are comparing if the current value and the next value add up to k.
//We are also looking to ensure that although there may be duplicates within the array, when forming the pairs, 
//that they are distinct pairs that add up to the given k value. 

//Objects allows for keys with unique values, which it what we are looking for. 
//We establish the variable setPairs as an empty hash for which the key-value pairs would be stored
//So, we first have to slice the array from the first index to the second-to-last index
//Then check if the current value and the next value add up to k. If that is true, we want to ensure that 
// both numbers are not already used as keys in another key-value pair. So long as that is true,
//we would set the current value as the key and the nextValue as the value to establish the key-value pair
//for the given k value. 