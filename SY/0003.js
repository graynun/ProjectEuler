var prime = require("./Prime"),
	N = 600851475143,
	sqrtN = Math.sqrt(N),
	factors = [];

for(var i = 0; i < prime.primeTable.primes.length; i++) {
	var thePrime = prime.primeTable.primes[i];

	if(N % thePrime === 0) {
		factors.push(thePrime);
	}
}

for(var i = 0; i < factors.length; i++) {
	var f = factors[i];

	console.log(f, prime.factorExp(N, f)[0]);
}
