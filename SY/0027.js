var Prime = require("./Prime");

var max = {
		val: -Infinity,
		a: NaN,
		b: NaN
	};


for(var b = -999; b < 1000; b++) {
	if(!Prime.isPrime(b)) continue;
	console.log(b);
	for(var a = -999; a < 1000; a++) {
		var fn = function(n) {
				return n * n + a * n + b;
			};

		for(var n = 0; ; n++) {
			if(!Prime.isPrime(fn(n))) {
				break;
			}
		}

		if(n > max.val) {
			max.val = n;
			max.a = a;
			max.b = b;
		}
	}
}

console.log(max);
