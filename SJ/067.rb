require 'pp'
class Calc
	attr_reader :arr

	def initialize
		f = File.open('./data/tryangle.txt')
		@base = f.read.split(/[\n\t]+/).map {|arr| arr.split(/\s/)}
		@count = 0
	end


	def find
		max_of_line @base.first			
	end

	def max_of_line arr, y=0
		new_line = []
		(0..y).each do |x|
			new_line << @base[y][x].to_i + max_of_input(x, y, arr)
		end

		
		if y < @base.length-1 
			max_of_line(new_line, y+1)
		else
			[new_line.max, @count]
		end
	end

	def max_of_input(x, y, max_of_routes)
		@count+=1
		if y == 0 
			0
		else
			[max_of_routes[x-1].to_i, max_of_routes[x].to_i].max
		end
	end	

end

calc = Calc.new
pp calc.find