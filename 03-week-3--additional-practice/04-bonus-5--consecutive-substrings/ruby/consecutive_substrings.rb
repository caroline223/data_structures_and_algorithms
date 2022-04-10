def consecutive_substrings(string)
  # type your code in here
 new_arr = string.split('')
 sub_strings = []

 new_arr.each_with_index do |character, index|

    sub_strings << character
    fragment = character

    new_arr.slice(index + 1 .. -1).each_with_index do |letter|
      fragment += letter
      sub_strings << fragment
    end
 end

sub_strings
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']"
  print "=> " 
  print consecutive_substrings('abc')

  puts

  puts "Expecting: ['a']"
  print "=> " 
  print consecutive_substrings('a')

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution
