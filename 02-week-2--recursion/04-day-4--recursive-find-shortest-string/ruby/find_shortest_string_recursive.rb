def find_shortest_string_recursive(arr)
  # type your code in here
  return arr[0] if arr.length == 1

  second_word = find_shortest_string_recursive(arr[1..-1])

  arr[0].length <= second_word.length ? arr[0] : second_word
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 'a'"
  puts "=>", find_shortest_string_recursive(['aaa', 'a', 'bb', 'ccc'])

  puts

  puts "Expecting: 'hi'"
  puts "=>", find_shortest_string_recursive(['cat', 'hi', 'dog', 'an'])

  puts

  puts "Expecting: 'lily'"
  puts "=>", find_shortest_string_recursive(['flower', 'juniper', 'lily', 'dandelion'])

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution

#Iterative solution

# def find_shortest_string_recursive

#arr.sort_by{|s| s.length }[0]

#end
