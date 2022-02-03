function recursiveCount(num = 0) {
  if(num > 10){
    return;
  }
  console.log(num)
  recursiveCount(num + 1)
}

if (require.main === module) {
  recursiveCount();
}

module.exports = recursiveCount;

// OPTIONAL
// Please add your pseudocode to this file
// And a written explanation of your solution

//The idea of this challenge is that you want a function to call onto itself so that when from numbers 0 - 9, 
//it would output the number
//However, once the number reaches 10, the function stops
