p (1...1000).inject(0) {|sum,i| sum += i if i % 3 == 0 or i % 5 == 0; sum }

