def reverse_string(str)
  # type your code in here
  split_string = str.split("")
  new_string = []
  split_string.size.times {new_string << split_string.pop}
  new_string.join 
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 'ih'"
  puts "=>", reverse_string('hi')

  puts

  puts "Expecting: 'ybabtac'"
  puts "=>", reverse_string('catbaby')

  # Don't forget to add your own!
end
puts reverse_string('Caroline')

# Please add your pseudocode to this file
# And a written explanation of your solution

#My explanation
# Take the string and turn it into an array using the split method
#Create a new array to take in the reversed contents of the original array that was split from a string
# Iterate through each element of the array (amount of elements within the array is determined by the size and times methods)
# remove the last element of the first array (through the pop method) and shove it into the new array
# then rejoin the array into a string using the join method 