var fs = require('fs'),
	path = require('path'),
	primeNumber = path.join(__dirname, 'primes.json'),
	primeTable = {};

primeTable.limit = 10000000;
primeTable.primes = [];

exports.prime = function(n) {
	var range = Math.sqrt(n);

	for (var i = 2; i <= range; i++) {
		if ( n % i == 0 ) {
			return false;
		}
	}
	primeTable.primes.push(n);
};

for(var i = 2; i < primeTable.limit; i++){
	exports.prime(i);
}

fs.writeFileSync(primeNumber, JSON.stringify(primeTable), 'utf8');



