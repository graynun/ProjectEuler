# 1, 4, 5원의 동전이있다
# n원일때 가장 적은 개수의 동전으로 환산하라

# 16 => 5,5,5,1
# 15 => 5,5,5
# 14 => 5,5,4
# 13 => 5,4,4
# 12 => 4,4,4
# 11 => 5,5,1
# 10 => 5,5
# 9 => 5,4
# 8 => 4,4
# 7 => 5,1,1
# 6 => 5,1
# 5 => 5
# 4 => 4
# 3 => 1,1,1
# 2 => 1,1
# 1 => 1
class Calc
	def initialize price 
		@price = price
		@coins = { 5 => 0, 4 => 0, 1 => 0 }
		@@cache = []
	end

	def find 
		@coins.each do |k,v|
			@coins[k] = @price / k.to_i
			@price = @price % k.to_i
		end
		if @coins[1] == 3 and @coins[5] > 0
			@coins[5] -= 1
			@coins[1] -= 3
			@coins[4] += 2
		end
		if @coins[1] == 2 and @coins[5] > 1
			@coins[5] -= 2
			@coins[1] -= 2
			@coins[4] += 3
		end
		@coins#.values.inject(:+)
	end
end

(20..30).reverse_each do |i|
	result = Calc.new(i).find
	p "#{i} => #{result}"
end

