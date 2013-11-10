var Prime = require("./Prime"),
	ab = [],
	N = 28213,
	result = [false];

<<<<<<< HEAD
=======
console.time('a');
>>>>>>> f81cb056a942e46d4e5bdf6afe73adc06051dad1
var isAbundant = function(n) {
	return (Prime.sumDivisors(n) > n * 2);
};

for(var i = 1; i <= N; i++) {
	result.push(false);
	if(isAbundant(i)) ab.push(i);
}

<<<<<<< HEAD
ab.forEach(function(val) {
	ab.forEach(function(val2) {
		if(val + val2 > N) return;
		result[val + val2] = true;
	});
});
=======
// ab.forEach(function(val) {
// 	ab.forEach(function(val2) {
// 		if(val + val2 > N) return;
// 		result[val + val2] = true;
// 	});
// });


for(i = 0; i < ab.length; i++) {
	for(j = i; j < ab.length; j++) {
		var s = ab[i] + ab[j];
		if(s > N) break;
		result[s] = true;
	}
}
>>>>>>> f81cb056a942e46d4e5bdf6afe73adc06051dad1

console.log(result.reduce(function(prev, val, i) {
	if(val === false) {
		return prev + i;
	} else {
		return prev;
	}
}, 0));
<<<<<<< HEAD
=======
console.timeEnd('a');
>>>>>>> f81cb056a942e46d4e5bdf6afe73adc06051dad1
