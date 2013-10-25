# -*- coding: utf-8 -*-
# n의 약수들 중에서 자신을 제외한 것의 합을 d(n)으로 정의했을 때,
# 서로 다른 두 정수 a, b에 대하여 d(a) = b 이고 d(b) = a 이면 
# a, b는 친화쌍이라 하고 a와 b를 각각 친화수(우애수)라고 합니다.

# 예를 들어 220의 약수는 자신을 제외하면 1, 2, 4, 5, 10, 11, 20, 22, 44, 55, 110 이므로 그 합은 d(220) = 284 입니다.
# 또 284의 약수는 자신을 제외하면 1, 2, 4, 71, 142 이므로 d(284) = 220 입니다.
# 따라서 220과 284는 친화쌍이 됩니다.

# 10000 이하의 친화수들을 모두 찾아서 그 합을 구하세요.
from compiler.ast import flatten
		

class Calc:
	def __init__(self, max):
	    self.max = max
	    self.results = {}
	    self.pair_numbers = []
			
	def find(self):
		for i in xrange(1, self.max):
			sum_of_divisor = self.sum_of_divisor(i)
			
			if sum_of_divisor < self.max and i == self.sum_of_divisor(sum_of_divisor):
				if i != sum_of_divisor:
					self.pair_numbers.append([i, sum_of_divisor]) 
		twice_of_sum = reduce(lambda x, y: x+y, flatten(self.pair_numbers), 0)
		sum = twice_of_sum / 2
		print sum

	def sum_of_divisor(self, number):
		if self.results.has_key(str(number)) == False:
			results = []
			for i in range(1 ,number):
				if number % i == 0:
					results.append(i);
			sum = reduce(lambda x, y: x+y, results, 0) 
			self.results[str(number)] = sum
		else:
			sum = self.results[str(number)]
		
		return sum
			

calc = Calc(10000)
calc.find()
# calc.d(12)
# calc.d(12)