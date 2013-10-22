# 어떤 수를 소수의 곱으로만 나타내는 것을 소인수분해라 하고, 이 소수들을 그 수의 소인수라고 합니다.
# 예를 들면 13195의 소인수는 5, 7, 13, 29 입니다.

# 600851475143의 소인수 중에서 가장 큰 수를 구하세요.

require 'json'

class Calc
	def initialize(target_number)
		@target_number = target_number
		@target_prime_numbers = []
		
		begin
			json_file_path = File.expand_path(File.dirname(__FILE__)+ '/data/prime_numbers.json')
			@json_file = File.open json_file_path, File::RDWR
			@prime_numbers = JSON.parse @json_file.read
		rescue Exception => e
			e.message
		end
		
	end

	def find(target_number = @target_number)#_integer_factorization
		
		new_target_number = nil
		@prime_numbers.reverse_each do |prime_number|
			if (target_number % prime_number == 0)
				new_target_number = target_number / prime_number
				@target_prime_numbers << prime_number
				break
			end
		end
		if new_target_number
			find new_target_number
		else
			if target_number == 1
				p @target_prime_numbers.max
			else
				p @target_prime_numbers, target_number
			end
		end
	end


end

@calc = Calc.new 600851475143
@calc.find # => 6857
			