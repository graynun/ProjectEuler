/*
var Prime = require("./Prime"),
	N = 10000,
	sum = 0;

console.time('a');
for(var i = 1; i < N; i++) {
	var sumDiv = Prime.sumDivisors(i) - i;

	if(sumDiv > i) {
		if(Prime.sumDivisors(sumDiv) - sumDiv === i) {
			sum += sumDiv + i;
		}
	}
}

console.log(sum);
console.timeEnd('a');
*/




var Prime = require("./Prime"),
	table = {},
	N = 10000,
	sum = 0;

console.time('a');
for(var i = 1; i < N; i++) {
	table[i] = Prime.sumDivisors(i) - i;
}

for(var i = 1; i < N; i++) {
	var value = table[i];
	if(i < value && table.hasOwnProperty(value.toString()) && i !== value && i === table[value]) {
		sum += value + i;
	}
}

console.log(sum);
console.timeEnd('a');
