var prime = require("./Prime"),
	primeTable = prime.primeTable.primes;

var sum = 0,
	N = 2000000;

for(var i = 0;; i++) {
	var thePrime = primeTable[i];

	if(thePrime >= N) break;

	sum += thePrime;
}

console.log(sum);
