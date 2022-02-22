function romanNumeral(string) {
  // type your code here
  romanLetter = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }

  let accumulator = 0

  for(let i = 0; i < string.length; i++){
    if(string[i] === "I" && string[i + 1] === "V"){
      accumulator += 4
      i++;
    }
    else if(string[i] == "I" && string[i + 1] === "X"){
      accumulator += 9
      i++;
    }
    else if(string[i] == "X" && string[i + 1] === "L"){
      accumulator += 40
      i++;
    }
    else if(string[i] == "X" && string[i + 1] === "C"){
      accumulator += 90
      i++;
    }
    else if(string[i] == "C" && string[i + 1] === "D"){
      accumulator += 400
      i++;
    }
    else if(string[i] == "C" && string[i + 1] === "M"){
      accumulator += 900
      i++;
    }
    else{
      accumulator += romanLetter[string[i]]
    }

  }

  return accumulator
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 1");
  console.log(romanNumeral('I'));

  console.log("");

  console.log("Expecting: 9");
  console.log(romanNumeral('IX'));

  console.log("");

  console.log("Expecting: 402");
  console.log(romanNumeral('CDII'));

  console.log("");

  console.log("Expecting: 1990");
  console.log(romanNumeral('MCMXC'));

  console.log("");

  console.log("Expecting: 2022");
  console.log(romanNumeral('MMXXII'));
}

module.exports = romanNumeral;

// Please add your pseudocode to this file
// And a written explanation of your solution

//In order to write the code, first, I had to establish the parameters for which the roman numerals are formed.
//I established that through creating the romanLetter variable
// I also created the accumulator variable which when the Roman numeral is converted to an integer, it would then add to the accumulator
//which serves as a baseline 
//Afterwards, I then created a loop which incoporated a conditional for each changing point within the roman numerals
//i.e. 5, 10, 50, 100, 500, and 1000.
//Lastly, I had to ensure that the function returned the value of the accumulator. 

