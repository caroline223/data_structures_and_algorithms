function selectionSortRecursive(arr) {
  // type your code here
 if (arr.length === 0) return [] //base case

 const minValue = Math.min(...arr) //find the minimum value within the given array
 const index = arr.indexOf(minValue) //based on the minimum value, find the associated value of the index number
 arr.splice(index, 1) // replaces the beginning index of the array with the index associated with the smallest value

 const result = selectionSortRecursive(arr)
 result.unshift(minValue) //ensures that the minimum value of the array preceeds the other values within the array

 return result 
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSortRecursive([3, -1, 5, 2]));

  console.log("");
}

module.exports = selectionSortRecursive;

// Please add your pseudocode to this file
// And a written explanation of your solution

//Iterative Solution

//function selection_sort_recursive(arr){

//for(let i = 0; i < arr.length - 1; i++){

  // let minIndex = i
  // for (let j = i + 1; j < arr.length; j++){

    // if( arr[j] < arr[minIndex]){

      // minIndex = j
    // }
  // }
  // [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
// }
  // return arr
//}


