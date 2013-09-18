//1. 2^p 5^q 꼴인가 -> 0
//2. 아닐 경우, 그거 떼어낸 부분이 10^k - 1의 약수인 최소의 k가 답

var Prime = require("./Prime");


var N = 1000,
	max = {
		val: -Infinity,
		n: 0
	};

for(var i = 1; i < N; i++) {
	var f = Prime.factorize(i),
		nowI = i;

	if(f.hasOwnProperty(2)) {
		nowI /= Math.pow(2, f[2]);
	}

	if(f.hasOwnProperty(5)) {
		nowI /= Math.pow(5, f[5]);
	}

	for(var k = 1, nowK = 10;; k++) {
		if(nowI === 1) {
			k = 0;
			break;
		}

		if((nowK - 1) % nowI === 0) break;

		nowK *= 10;
		nowK = (nowK % nowI);
	}

	if(k > max.val) {
		max.val = k;
		max.n = i;
	}
};

console.log(max.n);
