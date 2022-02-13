def roman_numeral(string)
  # type your code in here
  roman_letter = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000
  }

  index = 0
  accumulator = 0
   
  while index < string.length 
    two_characters = (string[index] + (string[index + 1] || '')).to_sym

    if !roman_letter[two_characters].nil?
      accumulator += roman_letter[two_characters]
      index += 2
    else
      accumulator += roman_letter[string[index].to_sym]
      index += 1
    end
  end
  
 accumulator
end



if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 1"
  puts roman_numeral('I')

  puts

  puts "Expecting: 9"
  puts roman_numeral('IX')

  puts

  puts "Expecting: 402"
  puts roman_numeral('CDII')

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution
