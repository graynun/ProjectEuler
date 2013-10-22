# ##[문제 4] 대칭수

# 	앞에서부터 읽을 때나 뒤에서부터 읽을 때나 모양이 같은 수를 대칭수(palindrome)라고 부릅니다.
# 	두 자리 수를 곱해 만들 수 있는 대칭수 중 가장 큰 수는 9009 (= 91 × 99) 입니다.
# 	세 자리 수를 곱해 만들 수 있는 가장 큰 대칭수는 얼마입니까?

class Calc
	def initialize
		@palindromes = []
	end

	def make n
		min = 10**(n-1)
		max = 10**(n) - 1
		(min..max).each do |i|
			(min..max).each do |j|
				add_palindrome(i*j)
			end
		end
		@palindromes
	end

	def add_palindrome result
		@palindromes << result if palindrome?(result)
	end

	def palindrome? value 
		array = value.to_s.split('')
		same = true
		array.each_with_index { |v, i| same = false unless v == array[-i-1] }
		same
	end
end

p Calc.new.make(3).max