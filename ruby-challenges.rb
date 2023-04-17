# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

# Pseudocode 1.) Create a method called containsLetter
# 2.) containsLetter will take in an array and a string as an argument.
# 3.) create an empty array called answer
# 4.) use .each to iterate over the array array argument
# 5.) use a condition statment and pass in value through the pipes.
# 6.) use .include? method to check array argument includes the string argument
# 7.) if the condition is met shovel the value at index into answer

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

def containsLetter (array, string)
    answer = []
    array.each do |value|
        if value.include?(string)
        answer << value
        end
     end
    return answer
end

p containsLetter(beverages_array, letter_o)
p containsLetter(beverages_array, letter_t)

################################################################################################

# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Rhode Island'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 

# Pseudocode 1.) Create a method called hash_array
# 2.) hash_array takes a hash as an argument
# 3.) use .value to access the hash's key's value
# 4.) use .flatten to combine nested arrays into one array
# 5.) use .sort to alphabetize the array.

def hash_array(hash)
    hash.values.flatten.sort
end

p hash_array(us_states)

################################################################################################

# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

class Bike
    attr_accessor :wheels, :current_speed

    def initialize
        @wheels = 2
        @current_speed = 0
    end

    def bike_info 
        "The Trek bike has #{@wheels} wheels and is going #{@current_speed} mph."
    end

    def pedal_faster(integer)
        @current_speed += integer
    end

    def brake(integer)
        @current_speed -= integer
        @current_speed = 0 if @current_speed <= 0
    end
end

my_bike = Bike.new

puts my_bike.bike_info

################################################################################################

# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0

puts my_bike.pedal_faster(10) # output: 10
puts my_bike.current_speed
puts my_bike.pedal_faster(28) # output: 28
puts my_bike.current_speed
puts my_bike.brake(5) # output: 23
puts my_bike.current_speed
puts my_bike.brake(23) # output: 0
puts my_bike.current_speed
puts my_bike.brake(100) # output: 0
puts my_bike.current_speed