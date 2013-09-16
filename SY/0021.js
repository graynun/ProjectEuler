var Prime = require("./Prime"),
	table = {},
	N = 10000,
	sum = 0;

for(var i = 1; i < N; i++) {
	table[i] = Prime.sumDivisors(i) - i;
}

for(var i = 1; i < N; i++) {
	var value = table[i];
	if(table.hasOwnProperty(value.toString()) && i !== value && i === table[value]) {
		sum += value + i;
	}
}

console.log(sum / 2);
