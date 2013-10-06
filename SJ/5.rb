
##[문제 5] 구간~ 어떤 수로도 나누어 떨어지는 가장 작은 수

	# 1 ~ 10 사이의 어떤 수로도 나누어 떨어지는 가장 작은 수는 2520입니다.
	# 그러면 1 ~ 20 사이의 어떤 수로도 나누어 떨어지는 가장 작은 수는 얼마입니까?


class Calc


	def initialize start, _end
		@range = (start.._end)
		@prime_numbers = [2,3,5,7,11,13,16,17,19] 
	end

	def find
		divisors = {}

		@range.each do |i|
			results = (get_divisor i)
			results.each do |result|
				base = result[:base]
				pow =  result[:pow]
				divisors[base] = 1 unless divisors[base]
				divisors[base] = pow if divisors[base] < pow
					

			end
		end
		
		sum = 1
		divisors.each do |k,v|
			sum *= k**v
		end
		sum
	end


	
	def get_divisor number
		arr = []
		(2...number).each do |i|
			if number % i == 0 and @prime_numbers.include?(i)
				arr << (check_pow number, i) 
			end
		end
		arr.length == 0 ? [{base: number, pow: 1}] : arr
	end

	def check_pow number, i, pow=1

		if number % i**pow == 0 
			rest = number / i**pow
			if rest > i  
				check_pow(number, i, pow+1)
			elsif rest == i
				{ base: i, pow: (pow+1)}
			elsif rest < i
				{ base: i, pow: 1 }	
			end
		else
			{ base: i, pow: 1 }
		end
	end

end

p Calc.new(1, 20).find

# p Calc.new(1, 10).check_pow(10, 2)
# p Calc.new(1, 10).check_pow(12,4)
# p Calc.new(1, 10).check_pow(8,2)

