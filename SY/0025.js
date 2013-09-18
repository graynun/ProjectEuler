var BigNumber = require('./BigNumber').BigNumber;

var fibs = [
		new BigNumber([1]),
		new BigNumber([1])
	];

var numDigit = function(bn) {
	var bigDigit = bn.arr[bn.arr.length - 1];

	return (bn.arr.length - 1) * 6 + bigDigit.toString().length;
};


var N = 1000;

for(var i = 3;; i++) {
	var sum = BigNumber.plus(fibs[i - 2], fibs[i - 3]);

	fibs.push(sum);
	if(numDigit(sum) === N) break;
}

console.log(i);
