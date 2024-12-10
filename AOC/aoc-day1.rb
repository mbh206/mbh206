file_path = "input.txt"
data = File.read(file_path)
left_arr = []
right_arr = []

data.each_line do |line|
  left, right = line.strip.split(/\s+/).map(&:to_i)

  left_arr << left
  right_arr << right
end

left_arr.sort!
right_arr.sort!

total_difference = 0
left_arr.each_with_index do |left, index|
  total_difference += (left - right_arr[index]).abs
end

p "The total difference is: #{total_difference}"

total_occurence_value = []
left_arr.each do |occurence|
  total_occurence_value << right_arr.count(occurence) * occurence
end

p "The difference total is: #{total_occurence_value.sum}"
