# "3+(5+2)*6"
# 숫자끼리 붙었을때 오른쪽 기호와 연산
# 
class Calculater
	def initialize string
		@base = string.scan(/[\d\+\-\*\/\(\)]/)
	end

	def change_to_polish
		stack = []
		formulars = []
		cursor = 0
		
		while @base.length > 0
			i = @base.first
			if i.match(/\d+/) # number 
				stack.push(@base.shift)
			elsif i.match(/\+|\-/) # +, - 
				formulars.push(@base.shift)
			elsif i.match(/\*|\//) # *, /
				formular = @base.shift
				number = @base.shift
				stack.push(number, formular)
			elsif i.match(/\(/) # (
				cursor += 1
				@base.shift		
			elsif i.match(/\)/) # )
				@base.shift		
				stack.push(formulars.pop)
			end
		end
		result = stack + formulars
		p result

	end

	def calculate

	end	

end

# Calculater.new("3+5*2+6").change_to_polish
Calculater.new("(3+(5+2))*6").change_to_polish