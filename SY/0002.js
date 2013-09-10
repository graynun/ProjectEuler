var fib = function(n) {
	var s5 = Math.sqrt(5),
		a = (1 + s5) / 2,
		b = (1 - s5) / 2;

	return Math.round((Math.pow(a, n + 2) - Math.pow(b, n + 2)) / s5);
};

var sum = 0;

for(var i = 0;; i++) {
	var f = fib(i);

	if(f >= 4000000) break;
	if(f % 2 === 1) continue;

	sum += f;
}

console.log(sum);
