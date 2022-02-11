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

//First, I established an empty array which will hold the group of parentheses
//Then, I iterated with a for loop for which the initial logic states that if the first element of the array
//starts with the left parenthesis, then push that parenthesis to the end of the array to balance out.

//Then, I included the logic that if the first element of the array starts with the right parenthesis, then,
//first look to see if the ending of the array has the left parenthesis. If it does, then remove it from the array
//so that it can balance out. If not, then add the appropriate number of right parentheses to the end of the 
//array to balance the array out. 

//Lastly, return the number of missing parentheses needed to add to the array. 
