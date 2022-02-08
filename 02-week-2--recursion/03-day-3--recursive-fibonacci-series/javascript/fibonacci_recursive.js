function fibonacci(n) {
  // type your code here
  if (n <=1 ) return n

  return fibonacci(n -1) + fibonacci(n - 2)
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

//The idea behind my solution is that the first two numbers in a fibonacci series are 0 and 1. So, in this case,
//if the value of n is less than or equal to 1, then return the value of n itself. Otherwise, we would return the value 
// of n within the fibonacci series as the sum of the preceeding two numbers in the series which would give you the value of the 
// next number. 
