function fibonacci(num) {
  let arr = [0,1]

  for(let i = 2; i < num + 1; i++){
    arr.push(arr[i - 2] + arr[i - 1])
  }
  return arr[num]
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution

//I first established an array of the first two values in the fibonacci sequence which is 0 and 1
//I did this because according to the fibonacci sequence, the value of each successive number is the sum of the prior two numbers
//having 0 and 1 there serves as a baseline to build upon the sequence because by storing these values,
//I will always get the successive value in the sequence
//Then I did a for loop where I take the numerical value of the prior two numbers in the array (delinated by its index value)
//and then push that number into the array. 