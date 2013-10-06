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
			