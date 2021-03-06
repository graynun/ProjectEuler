require 'pp'
# 75
# 95 64
# 17 47 82
# 18 35 87 10
# 20 04 82 47 65
# 19 01 23 75 03 34
# 88 02 77 73 07 63 67
# 99 65 04 28 06 16 70 92
# 41 41 26 56 83 40 80 70 33
# 41 48 72 33 47 32 37 16 94 29
# 53 71 44 65 25 43 91 52 97 51 14
# 70 11 33 28 77 73 17 78 39 68 17 57
# 91 71 52 38 17 14 91 43 58 50 27 29 48
# 63 66 04 68 89 53 67 30 73 16 69 87 40 31
# 04 62 98 27 23 09 70 98 73 93 38 53 60 04 23

class Calc
	attr_reader :arr

	def initialize
		@arr = "75
				95 64
				17 47 82
				18 35 87 10
				20 04 82 47 65
				19 01 23 75 03 34
				88 02 77 73 07 63 67
				99 65 04 28 06 16 70 92
				41 41 26 56 83 40 80 70 33
				41 48 72 33 47 32 37 16 94 29
				53 71 44 65 25 43 91 52 97 51 14
				70 11 33 28 77 73 17 78 39 68 17 57
				91 71 52 38 17 14 91 43 58 50 27 29 48
				63 66 04 68 89 53 67 30 73 16 69 87 40 31
				04 62 98 27 23 09 70 98 73 93 38 53 60 04 23".split(/[\n\t]+/).map {|arr| arr.split(/\s/)}
		@routes = []
	end


	def find
		move(0, 0, [])
		@routes.map {|arr| arr.inject(:+)}.max
		
	end

	def move(x, y, _arr)
		arr = _arr.dup
		arr << @arr[y][x].to_i

		if y < @arr.length-1
			move(x, y+1, arr)
			move(x+1, y+1, arr)
		else
			@routes << arr if arr.length == @arr.length
		end
		
	end

end

# calc = Calc.new
# # pp calc.arr.length
# pp calc.find

class Calc2
	attr_reader :arr

	def initialize
		@base = "75
				95 64
				17 47 82
				18 35 87 10
				20 04 82 47 65
				19 01 23 75 03 34
				88 02 77 73 07 63 67
				99 65 04 28 06 16 70 92
				41 41 26 56 83 40 80 70 33
				41 48 72 33 47 32 37 16 94 29
				53 71 44 65 25 43 91 52 97 51 14
				70 11 33 28 77 73 17 78 39 68 17 57
				91 71 52 38 17 14 91 43 58 50 27 29 48
				63 66 04 68 89 53 67 30 73 16 69 87 40 31
				04 62 98 27 23 09 70 98 73 93 38 53 60 04 23".split(/[\n\t]+/).map {|arr| arr.split(/\s/)}
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

# calc = Calc2.new
# pp calc.find



