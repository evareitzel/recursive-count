def recursive_count(num = 0)
  # type your code in here
  counting(num)
end

# counting
def counting (count = 0)
  while count < 10
    puts count
    count += 1
  end
end


if __FILE__ == $PROGRAM_NAME
  recursive_count
end

# OPTIONAL
# Please add your pseudocode to this file
# And a written explanation of your solution
