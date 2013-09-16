require 'json'

class PrimeNumber
	attr_accessor :prime_numbers

	def initialize
		begin
			json_file_path = File.expand_path(File.dirname(__FILE__)+ '/../data/prime_numbers.json')
			@json_file = File.open json_file_path, File::RDWR|File::CREAT, 0644
			@prime_numbers = JSON.parse @json_file.read
		rescue Exception => e
			p e.message
		end
	end

	def generate(max)
		((@prime_numbers.last.to_i + 1)..max).each do |i|
			@prime_numbers << i if is_prime?(i)
		end
		write_file
		self
	end

	def is_prime?(number)
		is_prime = true
		(2...(number/2.0).ceil).each do |i|
			is_prime = false if number % i == 0
		end
		is_prime
	end

	# TODO::REFACTORING just append when generate again.
	# TODO::FIXED remove already generated array
	def write_file
		@json_file.write(@prime_numbers.to_s)
		p "finish"
		exit(1)
	end
end

PrimeNumber.new.generate(10000)
