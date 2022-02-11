function balancingParentheses(string) {
  // type your code here
  let parentheses = []

  for(let i = 0; i < string.length; i++){
    if(string[i] === "("){
      parentheses.push(string[i])
    }
    else if (string[i] === ")"){
     if(parentheses[parentheses.length - 1] === "("){
       parentheses.pop();
     } else{
       parentheses.push("#")
     }
    }
  }
  return parentheses.length
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log(balancingParentheses('(()())'));

  console.log("");

  console.log("Expecting: 2");
  console.log(balancingParentheses('()))'));

  console.log("");

  console.log("Expecting: 1");
  console.log(balancingParentheses(')'));
}

module.exports = balancingParentheses;

// Please add your pseudocode to this file
// And a written explanation of your solution
