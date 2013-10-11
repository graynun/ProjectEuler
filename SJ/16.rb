# 215 = 32768 의 각 자리수를 더하면 
# 3 + 2 + 7 + 6 + 8 = 26 입니다.

# 2^1000의 각 자리수를 모두 더하면 얼마입니까?
class Calc
	def find
		number = 2**1000000
		number.to_s.split('').map {|i| i.to_i}.inject(:+)
	end
end

p Calc.new.find