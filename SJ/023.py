# -*- coding: utf-8 -*-
# 자신을 제외한 약수(진약수)를 모두 더하면 자기 자신이 되는 수를 완전수라고 합니다.
# 예를 들어 28은 1 + 2 + 4 + 7 + 14 = 28 이므로 완전수입니다.
# 또, 진약수의 합이 자신보다 작으면 부족수, 자신보다 클 때는 초과수라고 합니다.

# 12는 1 + 2 + 3 + 4 + 6 = 16 > 12 로서 초과수 중에서는 가장 작습니다.
# 따라서 초과수 두 개의 합으로 나타낼 수 있는 수 중 가장 작은 수는 24 (= 12 + 12) 입니다.

# 해석학적인 방법을 사용하면, 28123을 넘는 모든 정수는 두 초과수의 합으로 표현 가능함을 보일 수가 있습니다.
# 두 초과수의 합으로 나타낼 수 없는 가장 큰 수는 실제로는 이 한계값보다 작지만, 해석학적인 방법으로는 더 이상 이 한계값을 낮출 수 없다고 합니다.

# 그렇다면, 초과수 두 개의 합으로 나타낼 수 없는 모든 양의 정수의 합은 얼마입니까?


class Calc:

	def __init__(self, number):
		self.over_numbers = []
		self.perfect_numbers = []
		self.max = number

		for i in xrange(1, number+1):
			if self.is_over_number(i):
				self.over_numbers.append(i)

	def is_over_number(self, number):
		sum_of_divisors = 0 
		for i in range(1, number):
			if number % i == 0:
				sum_of_divisors += i
		return sum_of_divisors > number	

	def is_perfect_number(self, number):
		smaller_over_numbers = filter(lambda i: number > i , self.over_numbers)
		small_index = 0
		large_index = len(smaller_over_numbers) - 1
		while small_index <= large_index:
			sum = smaller_over_numbers[small_index] + smaller_over_numbers[large_index]
			print sum
			if small_index == large_index:
				if  number == sum:
					return True
				else: 
					return False
				
			else:
				if  number == sum:
					return True
				elif number > sum:
					small_index += 1
				elif number < sum:
					large_index -= 1
		
		return False

	def find(self):
		for i in range(1, self.max+1):
			if not self.is_perfect_number(i):
				self.perfect_numbers.append(i)

		print reduce(lambda sum, i: sum + i, self.perfect_numbers, 0)
		# print self.perfect_numbers

c = Calc(28123)
c.find()
# c.is_perfect_number()

