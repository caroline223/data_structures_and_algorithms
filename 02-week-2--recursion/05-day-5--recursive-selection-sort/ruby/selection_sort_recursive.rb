def selection_sort_recursive(arr)
  # type your code in here
  return [] if arr.length == 0 #base case

  min_value = arr.min #splat operator 
  index_value = arr.index(min_value)
  arr.delete_at(index_value)
  

  result = selection_sort_recursive(arr)
  result.unshift(min_value)

   
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: [-1, 2, 3, 5]"
  print "=> "
  print selection_sort_recursive([3, -1, 5, 2])

  puts

  puts "Expecting: [-8, -2, 4, 6]"
  print "=> "
  print selection_sort_recursive([4, -8, -2, 6])
  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution
