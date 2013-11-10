<<<<<<< HEAD
=======
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




>>>>>>> f81cb056a942e46d4e5bdf6afe73adc06051dad1
var Prime = require("./Prime"),
	table = {},
	N = 10000,
	sum = 0;

<<<<<<< HEAD
=======
console.time('a');
>>>>>>> f81cb056a942e46d4e5bdf6afe73adc06051dad1
for(var i = 1; i < N; i++) {
	table[i] = Prime.sumDivisors(i) - i;
}

for(var i = 1; i < N; i++) {
	var value = table[i];
<<<<<<< HEAD
	if(table.hasOwnProperty(value.toString()) && i !== value && i === table[value]) {
=======
	if(i < value && table.hasOwnProperty(value.toString()) && i !== value && i === table[value]) {
>>>>>>> f81cb056a942e46d4e5bdf6afe73adc06051dad1
		sum += value + i;
	}
}

<<<<<<< HEAD
console.log(sum / 2);
=======
console.log(sum);
console.timeEnd('a');
>>>>>>> f81cb056a942e46d4e5bdf6afe73adc06051dad1
