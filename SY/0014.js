var collatz = {1: 1},
	N = 1000000;

var getCollatz = function(n) {
	if(collatz.hasOwnProperty(n)) {
		return collatz[n];
	}

	if(n % 2 === 0) {
		collatz[n] = 1 + getCollatz(n / 2);
	} else {
		collatz[n] = 1 + getCollatz(3 * n + 1);
	}

	return collatz[n];
};

var max = {
	num: 1,
	len: 1
};

for(var i = 1; i < N; i++) {
	var c = getCollatz(i);

	if(c > max.len) {
		max.num = i;
		max.len = c;
	}
}

console.log(max);
