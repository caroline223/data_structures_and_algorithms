function rotateArray(arr, k) {
  // type your code here
  const rotations = k % arr.length

  const removed = arr.splice(arr.length - rotations, rotations)

  return removed.concat(arr)
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [4, 1, 2, 3]");
  console.log("=>", rotateArray([1, 2, 3, 4], 1));

  console.log("");

  console.log("Expecting: [2, 3, 1]");
  console.log("=>", rotateArray([1, 2, 3], 2));

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", rotateArray([1, 2, 3], 3));
}

module.exports = rotateArray;

// Please add your pseudocode to this file
// And a written explanation of your solution

//For this problem, my initial thought was that in order to have a rotating array, we would need to unshift the first element in the array
// to then take that same element and push it to the end of the array a set number of times (in accordance to the number of rotations assigned)

//We need to take into account when k is the same or larger than the array's length by getting the remainder of k / arr.length
