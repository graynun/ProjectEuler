# 세 자연수 a, b, c 가 피타고라스 정리 a^2 + b^2 = c^2 를 만족하면 피타고라스 수라고 부릅니다 (여기서 a < b < c ).
# 예를 들면 3^2 + 4^2 = 9 + 16 = 25 = 5^2이므로 3, 4, 5는 피타고라스 수입니다.

# a + b + c = 1000 인 피타고라스 수 a, b, c는 한 가지 뿐입니다. 이 때, a × b × c 는 얼마입니까?


class Calc
	def find
		value = []
		(1..1000).each do |i|
			(1..1000).each do |j|
				if (i**2 + j**2) == (1000-i-j)**2
					value = [i,j,(1000-i-j)]
				end
			end
		end
		value.inject(:*)
	end
end

p Calc.new.find