class Calc
	attr_reader :factorials

	def self.start
		calc = new 1, 2
		calc.get_factorial calc.factorials[-2], calc.factorials[-1]
	end

	def initialize start, _next
		@factorials = [start, _next]
		@sum = @factorials.inject(0) { |sum, i| sum += i if i % 2 == 0; sum }
	end

	def get_factorial i1, i2
		next_num = i1 + i2
		if next_num > 4000000 
			@sum
		else
			@factorials << next_num
			if next_num % 2 == 0
				@sum += next_num
			end
			self.get_factorial i2, next_num
		end
	end
end

p Calc.start