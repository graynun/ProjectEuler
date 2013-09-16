var N = 1000000;

var sprintf = require('sprintf').sprintf

var BigNumber = module.exports.BigNumber = function(arr) {
	this.arr = arr; // 1 Mi. base
};

var _ = module.exports.BigNumber.prototype;

_.toString = function() {
	var ret = "";

	ret += sprintf("%d", this.arr[this.arr.length - 1]);

	for(var i = this.arr.length - 2; i >= 0; i--) {
		ret += sprintf("%06d", this.arr[i]);
	}

	return ret;
};



module.exports.BigNumber.plus = function(n1, n2) {
	var ret = [],
		cr = 0;

	for(var i = 0; i < Math.max(n1.arr.length, n2.arr.length); i++) {
		if(n1.arr.length <= i) {
			ret.push(n2.arr[i]);
		} else if(n2.arr.length <= i) {
			ret.push(n1.arr[i]);
		} else {
			ret.push(n1.arr[i] + n2.arr[i]);
		}
	}

	for(var i = 0; i < ret.length; i++) {
		ret[i] += cr;

		if(ret[i] >= N) {
			cr = 1;
			ret[i] = ret[i] % N;
		} else {
			cr = 0;
		}
	}

	if(cr !== 0) ret.push(cr);

	return new BigNumber(ret);
};

module.exports.BigNumber.minus = function(n1, n2) {
	var ret = [],
		cr = 0;

	for(var i = 0; i < Math.max(n1.arr.length, n2.arr.length); i++) {
		if(n1.arr.length <= i) {
			ret.push(n2.arr[i]);
		} else if(n2.arr.length <= i) {
			ret.push(n1.arr[i]);
		} else {
			ret.push(n1.arr[i] - n2.arr[i]);
		}
	}

	for(var i = 0; i < ret.length; i++) {
		ret[i] += cr;

		if(ret[i] < 0) {
			cr = -1;
			ret[i] = ret[i] + N;
		} else {
			cr = 0;
		}
	}

	if(cr !== 0) ret.push(cr);

	for(var i = ret.length - 1; i >= 0; i--) {
		if(ret[i] === 0) ret.pop();
	}

	return new BigNumber(ret);
};


/* Examples
var BigNumber = require('./BigNumber').BigNumber;

var a = new BigNumber([3, 1]);
var b = new BigNumber([999998]);

console.log(BigNumber.minus(a, b).toString());
*/
