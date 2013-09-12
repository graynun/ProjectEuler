var N = 4000000;

console.time("Problem 2");

var s5 = Math.sqrt(5),
	a = Math.pow((1 + s5) / 2, 3),
	b = Math.pow((1 - s5) / 2, 3);

var fib = function(n) {
	return Math.round((Math.pow(a, n) - Math.pow(b, n)) / s5);
};

var sum = 0;

for(var i = 0;; i++) {
	var f = fib(i);

	if(f >= N) break;

	sum += f;
}

console.log(sum);
console.timeEnd("Problem 2");
