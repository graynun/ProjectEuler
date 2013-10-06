var BigNumber = require('./BigNumber').BigNumber;

var N = 100;

var factorial = function(n) {
	var prod = new BigNumber([1]);

	for(var i = 2; i <= n; i++) {
		prod = BigNumber.multiply(prod, i);
	}

	return prod;
};

var sumDigit = function(bn) {
	return bn.arr.reduce(function(prev, val) {
		return prev + val.toString().split("").reduce(function(prev, val2) {
			return prev + parseInt(val2, 10);
		}, 0);
	}, 0);
};


console.log(
	sumDigit(
		factorial(N)
	)
);
