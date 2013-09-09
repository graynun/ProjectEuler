var squareSum = function(n) {
	return n * (n + 1) * (2 * n + 1) / 6;
};

var sum = function(n) {
	return n * (n + 1) / 2;
};

var N = 100;

console.log(sum(N) * sum(N) - squareSum(N));
