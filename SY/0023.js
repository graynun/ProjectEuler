var Prime = require("./Prime"),
	ab = [],
	N = 28213,
	result = [false];

var isAbundant = function(n) {
	return (Prime.sumDivisors(n) > n * 2);
};

for(var i = 1; i <= N; i++) {
	result.push(false);
	if(isAbundant(i)) ab.push(i);
}

ab.forEach(function(val) {
	ab.forEach(function(val2) {
		if(val + val2 > N) return;
		result[val + val2] = true;
	});
});

console.log(result.reduce(function(prev, val, i) {
	if(val === false) {
		return prev + i;
	} else {
		return prev;
	}
}, 0));
