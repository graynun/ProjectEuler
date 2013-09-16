var BigNumber = require("./BigNumber").BigNumber,
	N = 1000;

var sumDigit = function(n) {
	return String(n).split("").reduce(function(prev, val) {
		return prev + parseInt(val, 10)
	}, 0);
};

var sumDigitBN = function(bn) {
	return bn.arr.reduce(function(prev, val) {
		return prev + sumDigit(val);
	}, 0);
};

var seed = new BigNumber([1]);

for(var i = 1; i <= N; i++) {
	seed = BigNumber.plus(seed, seed);
}

console.log(sumDigitBN(seed));
