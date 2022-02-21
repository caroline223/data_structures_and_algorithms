def distinct_pair_sum(arr, k)
  # type your code in here
 set_pairs = {}

 (0...(arr.length - 1)).each do |index|
  next_value = arr[index + 1]
  current_value = arr[index]

  if current_value + next_value == k && set_pairs[current_value] == nil && set_pairs[next_value] == nil
    set_pairs[current_value] = [current_value, next_value]
  end
 end

 set_pairs.values
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: [[1, 1], [2, 0]]"
  print "=> "
  print distinct_pair_sum([0, 1, 1, 2, 0, 1, 1], 2)

  puts

  puts "Expecting: [[2, 8]]"
  print "=> "  
  print distinct_pair_sum([3, 4, 2, 1, 5, 2, 8, 2], 10)

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution
