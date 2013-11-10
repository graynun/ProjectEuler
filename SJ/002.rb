# 피보나치 수열의 각 항은 바로 앞의 항 두 개를 더한 것이 됩니다. 1과 2로 시작하는 경우 이 수열은 아래와 같습니다.

# 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
# 짝수이면서 4백만 이하인 모든 항을 더하면 얼마가 됩니까?

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