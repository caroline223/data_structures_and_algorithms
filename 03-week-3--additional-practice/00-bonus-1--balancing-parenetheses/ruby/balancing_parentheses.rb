def balancing_parentheses(string)
  parentheses = []

  string.chars.each do |token|
    case token 
      when "("
        parentheses.push("(")
      when ")"
        if parentheses[parentheses.length - 1] == "("
            parentheses.pop()
        else
          parentheses.push("#")
        end
    end
  end

  parentheses.length
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 0"
  puts balancing_parentheses('(()())')

  puts

  puts "Expecting: 2"
  puts balancing_parentheses('()))')

  puts

  puts "Expecting: 1"
  puts balancing_parentheses(')')

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution
