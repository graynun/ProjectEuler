# 양의 정수 n에 대하여, 다음과 같은 계산 과정을 반복하기로 합니다.

# n → n / 2 (n이 짝수일 때)
# n → 3 n + 1 (n이 홀수일 때)

# 13에 대하여 위의 규칙을 적용해보면 아래처럼 10번의 과정을 통해 1이 됩니다.

# 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
# 아직 증명은 되지 않았지만, 이런 과정을 거치면 어떤 수로 시작해도 마지막에는 1로 끝나리라 생각됩니다. 
# (역주: 이것은 콜라츠 추측 Collatz Conjecture이라고 하며, 이런 수들을 우박수 hailstone sequence라 부르기도 합니다)

# 그러면, 백만(1,000,000) 이하의 수로 시작했을 때 1까지 도달하는데 가장 긴 과정을 거치는 숫자는 얼마입니까?

# 참고: 계산 과정 도중에는 숫자가 백만을 넘어가도 괜찮습니다.
class Conjecture
	@@cache = {}

	def initialize number
		@start = number
		@count = 0
		@route = []
	end

	def find number=@start
		if @@cache[number]
			@@cache[@start] = @@cache[number] + @count
			@route.reverse.each_with_index do |value, i|
				@@cache[value] = i+@@cache[number] + 1
			end
			return @@cache[@start] 		
		end

		@route << number
		@count += 1

		if number == 1 
			@route.reverse.each_with_index do |value, i| 
				@@cache[value] = i+1 
			end
			return @count 
		end

		if number % 2 == 0
			find( number/2 )
		else
			find( 3*number + 1 )
		end
	end

	def self.cache
		@@cache
	end
end

class Calc
	def initialize _end
		@max_count = 0
		@range = (1..._end)
	end	

	def start
		@range.reverse_each do |i|
			@max_count = [find(i), @max_count].max
		end
		@max_count
	end

	def find number
		Conjecture.new(number).find
	end

end

# p Calc.new(4).start
p Calc.new(1_000_000).start
# p Calc.new(1_000_000).find(13)