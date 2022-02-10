function selectionSortRecursive(arr) {
  // type your code here
 if (arr.length === 0) return [] //base case

 const minValue = Math.min(...arr)
 const index = arr.indexOf(minValue)
 arr.splice(index, 1)

 const result = selectionSortRecursive(arr)
 result.unshift(minValue)

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


