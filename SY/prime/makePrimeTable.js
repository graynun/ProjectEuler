var fs = require('fs'),
	path = require('path'),
	primeFile = path.join(__dirname, 'primes.json'),
	primeTable = {},
	isPrimeByList;

primeTable.N = 10000000;
primeTable.primes = [];

exports.isPrimeByList = isPrimeByList = function(n, primes) {
	var sqrtn = Math.sqrt(n);

	for(var i = 0; i < primes.length && primes[i] <= sqrtn; i++) {
		var p = primes[i];
		if(n % p === 0) return false;
	}

	return true;
};

for(i = 2; i <= primeTable.N; i++) {
	if(isPrimeByList(i, primeTable.primes)) {
		primeTable.primes.push(i);
	}
}

fs.writeFileSync(primeFile, JSON.stringify(primeTable), 'utf8');
