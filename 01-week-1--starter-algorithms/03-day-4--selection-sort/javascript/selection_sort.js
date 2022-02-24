function selectionSort(arr) {
  // type your code here
  for(let i = 0; i < arr.length - 1; i++){
      let minIndex = i
      for(let j = i + 1; j < arr.length; j++){
        if(arr[j] < arr[minIndex]){
          minIndex = j
        }
      }
      [arr[i], arr[minIndex]] =[arr[minIndex], arr[i]]
  }
  return arr
}

//You have to create a for loop where it would iterate through an array for a set number of times
//(depending on the length of the array) to then first find the smallest number. Once it finds the smallest
//number, the loop would set it as the minimum number and place said number in the front of the array.
//The process would continue until all numbers have been sorted 

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }
}

module.exports = selectionSort;

// Please add your pseudocode to this file
// And a written explanation of your solution
