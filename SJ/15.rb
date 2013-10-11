class Calc
	def initialize square
		@square = square
		@count = 0
	end

	def find
		move(0,0)
		@count
	end

	def move x, y
		if x == @square and y == @square
			@count += 1 

			return
		end
		
		new_x = x + 1
		new_y = y + 1
		
		if new_x <= @square
			move new_x, y 
		end

		if new_y <= @square
			move x, new_y
		end
	end
end

class Calc2
	def initialize(square)
		@square = square
		@arr = []

	end

	def find
		bake(0)
		@arr.last.last
	end 

	def bake number
		arr = []
		(0..@square).each do |i|
			if number == 0
				arr << 1
			else
				arr << @arr[number-1].slice(0,i+1).inject(:+)
			end
		end
		@arr << arr
		
		bake (number+1) if number < @square
	end
end

# p Calc.new(5).find
p Calc2.new(20).find #=> 137846528820










