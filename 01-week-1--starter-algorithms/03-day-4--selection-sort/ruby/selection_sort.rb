def selection_sort(arr)

  n = arr.length - 1
 
    n.times do |i|
      min_index = i
      for j in (i + 1)..n 
        min_index = j if arr[j] < arr[min_index]
      end
      arr[i], arr[min_index] = arr[min_index], arr[i]
    end
  return arr
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: [-1, 2, 3, 5]"
  print "=> "
  print selection_sort([3, -1, 5, 2])

  puts

  puts "Expecting: [-8, -4 , 3, 12]"
  print "=> "
  print selection_sort([12, -4, 3, -8])

  puts

  # Don't forget to add your own!

  # BENCHMARK HERE, you can print the average runtime
  long_input = []

  100.times { long_input << rand }
end

# Please add your pseudocode to this file
# And a written explanation of your solution
