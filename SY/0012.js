var prime = require("./Prime"),
	N = 500;

console.time("Problem 12");

for(var i = 1;; i++) {
	var a, b;

	if(i % 2 === 0) {
		a = i / 2;
		b = i + 1;
	} else {
		a = (i + 1) / 2;
		b = i;
	}

	if(prime.numDivisors(a) * prime.numDivisors(b) > N) {
		break;
	}
}

console.log(i * (i + 1) / 2);
console.timeEnd("Problem 12");
